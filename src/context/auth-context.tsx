import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../schema/types";

interface AuthProviderProps {
  children?: ReactNode;
}

export interface AuthContextModel {
  user: User;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export const useAuth = (): AuthContextModel => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  const values: AuthContextModel = {
    user,
    isLoggedIn,
  };

  // return all loadings to be the same style component
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
