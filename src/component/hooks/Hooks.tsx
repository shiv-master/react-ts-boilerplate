import { useContext } from "react";
import { Auth } from "../context/Auth";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

export const useAuth = () => {
  const AuthContext = useContext(Auth);
  if (!AuthContext) {
    throw new Error("useAuth should be used inside Auth Provider");
  }
  return AuthContext;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;
