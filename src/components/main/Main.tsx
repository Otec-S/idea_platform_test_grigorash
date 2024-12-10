import { useEffect, useState } from "react";
import FlightCard from "../flight-card/FlightCard";
import ticketsData from "../../mock-data/tickets.json";
import { IFlight } from "../../shared/types";
import styles from "./Main.module.css";
import { useStops } from "../../shared/hooks/useStops";

export default function Main() {
  const { state } = useStops();
  const [flights, setFlights] = useState<IFlight[]>([]);

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

  return (
    <div className={styles.container}>
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </div>
  );
}
