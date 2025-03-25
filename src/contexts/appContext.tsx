import { User } from "@/types/user";
import { delayTime } from "@/utils/time";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useEffect, useState } from "react";

export interface IAppContext {
  token: string | null;
  setToken: (token: string) => void;
  saveToken: (token: string) => void;
  apiUrl: string;
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

interface IAppProviderProps {
  children: React.ReactNode;
  apiUrl: string;
}

export function AppProvider({ children, apiUrl }: IAppProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  function saveToken(_token: string) {
    setToken(_token);
    AsyncStorage.setItem('token', _token);
  }

  async function logout() {
    AsyncStorage.removeItem('token');
    setUser(null);
    setToken('');
    router.replace("/login");
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        apiUrl,
        token,
        setToken,
        saveToken,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
