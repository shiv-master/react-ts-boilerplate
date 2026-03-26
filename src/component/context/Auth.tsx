import { createContext, useEffect, useState, type ReactNode } from "react";

export interface AuthVal {
  username: string;
  setUsername: (val: string) => void;
}

export interface Props {
  children: ReactNode;
}

export const Auth = createContext<AuthVal | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);
  const value = {
    username,
    setUsername,
  };
  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export default AuthProvider;
