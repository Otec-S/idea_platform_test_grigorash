import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StopsProvider } from "./context/StopsContext.tsx";
import { CurrencyProvider } from "./context/CurrencyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StopsProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </StopsProvider>
  </StrictMode>
);
