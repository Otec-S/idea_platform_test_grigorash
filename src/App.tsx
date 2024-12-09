import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Header />
      </Box>
    </>
  );
}

export default App;
