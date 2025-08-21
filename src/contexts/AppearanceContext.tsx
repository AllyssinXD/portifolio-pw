import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export interface AppearanceContextInterface {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
}

export const AppearanceContext =
  createContext<AppearanceContextInterface | null>(null);

function AppearanceProvider({ children }: { children: ReactNode }) {
  const [lightMode, setLightMode] = useState(false);

  return (
    <AppearanceContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </AppearanceContext.Provider>
  );
}

export default AppearanceProvider;
