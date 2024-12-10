import { useEffect, useState } from "react";

import FlightCard from "../flight-card/FlightCard";
import ticketsData from "../../mock-data/tickets.json";
import { IFlight } from "../../shared/types";
import styles from "./Main.module.css";

export default function BasicStack() {
  const [flights, setFlights] = useState<IFlight[]>([]);

  useEffect(() => {
    setFlights(ticketsData.tickets);
  }, []);

  return (
    <div className={styles.container}>
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </div>
  );
}
