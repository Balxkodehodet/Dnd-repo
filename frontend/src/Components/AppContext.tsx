import { createContext, useState, type ReactNode } from "react";

type AppContextType = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState("https://www.dnd5eapi.co/api"); 
  return (
    <AppContext.Provider
      value={{
        url,
        setUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}