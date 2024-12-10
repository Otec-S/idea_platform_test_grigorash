import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FlightCard from "../flight-card/FlightCard";
import ticketsData from "../../mock-data/tickets.json";
import { IFlight } from "../../shared/types";

export default function BasicStack() {
  const [flights, setFlights] = useState<IFlight[]>([]);

  useEffect(() => {
    setFlights(ticketsData.tickets);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {flights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </Stack>
    </Box>
  );
}
