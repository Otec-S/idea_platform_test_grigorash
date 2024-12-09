import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FlightCard from "../flight-card/FlightCard";

export default function BasicStack() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <FlightCard />
      </Stack>
    </Box>
  );
}
