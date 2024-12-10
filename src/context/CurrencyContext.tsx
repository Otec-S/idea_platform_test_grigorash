import React, { createContext, useState, ReactNode } from "react";

interface CurrencyContextProps {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrencyContext = createContext<CurrencyContextProps | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState<string>("RUB");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
