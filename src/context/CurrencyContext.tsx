import { createContext, useState, ReactNode, FC } from "react";

interface Props {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrencyContext = createContext<Props | undefined>(undefined);

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // FIXME:
  const [currency, setCurrency] = useState<string>("RUB");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
