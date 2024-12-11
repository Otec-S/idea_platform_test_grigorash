import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: "#cfe8fc", padding: "2rem" }}>
        <Header />
        <Main />
      </Box>
    </>
  );
}

export default App;
