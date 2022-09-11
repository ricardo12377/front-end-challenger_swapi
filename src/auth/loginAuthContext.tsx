import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../types/user";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  validateUser: ({ user, password }: UserType) => void;
  logged: boolean;
  setLogged: (value: boolean) => void;
  editable: boolean;
  setEditable: (value: boolean) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState({} as UserType);
  const [logged, setLogged] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const router = useNavigate();

  const validation = useCallback(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) setUser(JSON.parse(recoveredUser));

    if (!recoveredUser) setEditable(false);
  }, [user]);

  useEffect(() => {
    validation();
  }, []);

  const validateUser = ({ user, password }: UserType) => {
    if (user && password) {
      const loggedUser = {
        id: "1",
        user,
        password,
      };

      localStorage.setItem("user", JSON.stringify(loggedUser));
      if (loggedUser) {
        setUser(loggedUser);
        setLogged(true);
        setEditable(true);
        router("/");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        validateUser,
        logged,
        setLogged,
        editable,
        setEditable,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
