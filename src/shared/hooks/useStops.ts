import { useContext } from "react";
import { StopsContext } from "../../context/StopsContext";

// Создание хука для использования контекста
export const useStops = () => {
  const context = useContext(StopsContext);
  if (!context) {
    throw new Error("useStops должен быть использован внутри StopsProvider");
  }
  return context;
};
