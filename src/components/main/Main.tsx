import { useEffect, useState } from "react";
import FlightCard from "../flight-card/FlightCard";
import ticketsData from "../../mock-data/tickets.json";
import { IFlight } from "../../shared/types";
import styles from "./Main.module.css";
import { useStops } from "../../shared/hooks/useStops";
import { useCurrency } from "../../shared/hooks/useCurrency";
import { useCurrencyRate } from "../../shared/hooks/useCurrencyRate";

export default function Main() {
  const { state } = useStops();
  const { currency } = useCurrency();
  const [flights, setFlights] = useState<IFlight[]>([]);

  const {
    rate: currencyRate,
    loading: currencyLoading,
    error: currencyError,
  } = useCurrencyRate(currency);

  useEffect(() => {
    const filteredFlights = ticketsData.tickets.filter((ticket) => {
      const stopsCount = ticket.stops;
      switch (stopsCount) {
        case 0:
          return state["0-stops"];
        case 1:
          return state["1-stop"];
        case 2:
          return state["2-stops"];
        case 3:
          return state["3-stops"];
        default:
          return null;
      }
    });

    setFlights(filteredFlights);
  }, [state]);

  const convertPrice = (price: number) => {
    if (currency === "RUB") return price; // Если рубли, возвращаем без изменений
    if (!currencyRate) return price; // Если курс не получен, возвращаем цену без изменений
    return price * currencyRate; // Конвертация цены в выбранной валюте
  };

  if (currencyLoading) {
    return <div>Загрузка курсов валют...</div>;
  }

  if (currencyError) {
    return <div>Ошибка: {currencyError}</div>;
  }

  return (
    <main className={styles.container}>
      {flights.map((flight, index) => (
        <FlightCard
          key={index}
          {...flight}
          price={convertPrice(flight.price)}
        />
      ))}
    </main>
  );
}
