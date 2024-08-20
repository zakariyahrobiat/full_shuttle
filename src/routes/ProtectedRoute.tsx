import { PropsWithChildren, useContext } from "react";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";

import { useAuth } from "../contexts/authContext/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}
const ProtectedRoute = ({ children, ...rest }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
