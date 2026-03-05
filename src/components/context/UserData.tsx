import { createContext, useState, type ReactNode } from "react";

type UserVal = {
  name: string;
  email: string;
  city: string;
  company: string;
};

interface UserData {
  userData: UserVal;
  setUserData: (val: any) => void;
}

interface Props {
  children: ReactNode;
}

export const UserData = createContext<UserData | null>(null);

const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState();
  const value: any = {
    userData,
    setUserData,
  };
  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
