import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { PropsWithChildren } from "react";
import {
  login,
  logout,
  getAuthenticatedUser,
  registerUser,
} from "../../modules/auth/services";
import { listenToUserData } from "../../modules/dashboard/services";

export interface Passenger {
  id: string;
  username: string;
  email: string;
  matricNumber: string;
}
export interface Driver {
  id: string;
  username: string;
  email: string;
  plateNumber: string;
  numberOfSeats: number;
  available: number;
}
export interface AuthContextType {
  token: string | null;
  email: string;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  setAuthStatus: () => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  drivers: Driver[];

  setDrivers: Dispatch<SetStateAction<Driver[]>>;
  userId: string;
  passengers: Passenger[];
  setPassengers: Dispatch<SetStateAction<Passenger[]>>;
}
export const AuthContext = createContext<AuthContextType>({
  token: "",
  email: "",
  isAuthenticated: false,
  setToken: () => {},
  setAuthStatus: () => {},
  setIsAuthenticated: () => {},
  drivers: [],
  passengers: [],
  setDrivers: () => {},
  userId: "",
  setPassengers: () => {},
});

export const AuthProvider = (props: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const setAuthStatus = () => {
    if (token) {
      // console.log("Setting token in localStorage:", token);
      localStorage.setItem("token", token);
    }
  };
  useEffect(() => {
    setAuthStatus();
  }, [token]);
  const checkAuthStatus = () => {
    const checkToken = localStorage.getItem("token");
    // console.log("Checking token in localStorage:", checkToken);
    // console.log(checkToken);

    setIsAuthenticated(!!checkToken);
    setToken(checkToken !== null ? checkToken : "");
    // console.log("Auth status after checking token:", !!checkToken);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    const unsubscribe = listenToUserData(userId, "passenger", setDrivers);
    return () => {
      unsubscribe();
    };
  }, [userId]);

  useEffect(() => {
    const unsubscribe = listenToUserData(userId, "driver", setPassengers);
    return () => {
      unsubscribe();
    };
  }, [userId]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        token: token,
        email: "",
        setToken: setToken,
        setAuthStatus: setAuthStatus,
        setIsAuthenticated: setIsAuthenticated,
        drivers: drivers,
        setDrivers: setDrivers,
        userId: userId,
        passengers: passengers,
        setPassengers: setPassengers,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
