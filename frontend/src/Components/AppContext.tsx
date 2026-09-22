import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState("https://www.dnd5eapi.co/"); 
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

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }

  return context;
}