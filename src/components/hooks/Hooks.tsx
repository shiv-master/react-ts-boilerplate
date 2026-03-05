import { useContext } from "react";
import { UserData } from "../context/UserData";

export const useUserData = () => {
  const userContext = useContext(UserData);
  if (!userContext) {
    throw new Error("useUserData should be used inside Provider");
  }
  return userContext;
};
