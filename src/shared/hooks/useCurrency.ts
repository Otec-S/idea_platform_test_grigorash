import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error(
      "useCurrency должен использоваться внутри CurrencyProvider"
    );
  }
  return context;
};
