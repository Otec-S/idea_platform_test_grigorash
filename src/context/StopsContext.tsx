import { createContext, useState } from "react";

// TODO: вынести?
interface State {
  [key: string]: boolean;
  "0-stops": boolean;
  "1-stop": boolean;
  "2-stops": boolean;
  "3-stops": boolean;
  "all-flights": boolean;
}

interface Props {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

// Создаём контекст
export const StopsContext = createContext<Props | undefined>(undefined);

export const StopsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State>({
    "0-stops": false,
    "1-stop": false,
    "2-stops": false,
    "3-stops": false,
    "all-flights": false,
  });

  return (
    <StopsContext.Provider value={{ state, setState }}>
      {children}
    </StopsContext.Provider>
  );
};
