import { useContext } from "react";
import { StopsContext } from "../../context/StopsContext";

export const useStops = () => {
  const context = useContext(StopsContext);
  if (!context) {
    throw new Error("useStops должен использоваться внутри StopsProvider");
  }
  return context;
};
