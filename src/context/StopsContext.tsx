import { createContext, useState } from "react";

interface State {
  [key: string]: boolean;
  "0-stops": boolean;
  "1-stop": boolean;
  "2-stops": boolean;
  "3-stops": boolean;
}

interface Props {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

export const StopsContext = createContext<Props | undefined>(undefined);

export const StopsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State>({
    "0-stops": true,
    "1-stop": true,
    "2-stops": true,
    "3-stops": true,
  });

  return (
    <StopsContext.Provider value={{ state, setState }}>
      {children}
    </StopsContext.Provider>
  );
};
