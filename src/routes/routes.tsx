import { createHashRouter } from "react-router-dom";
import LandingPage from "../modules/home/LandingPage";
import Register from "../modules/auth/views/Register";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../modules/auth/views/Login";
import Dashboard from "../modules/dashboard/views/Dashboard";
import DriverDashboard from "../modules/dashboard/views/DriverDashboard";
import PassengerDashboard from "../modules/dashboard/views/PassengerDashboard";
const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "register-client",
    element: <Register userType="passenger" />,
  },
  {
    path: "register-driver",
    element: <Register userType="driver" />,
  },
  {
    path: "login-passenger",
    element: <Login userType="passenger" title="Passenger Login" />,
  },
  {
    path: "login-driver",
    element: <Login userType="driver" title="Driver Login" />,
  },
  {
    path: "/dashboard-driver",
    element: (
      <ProtectedRoute>
        <DriverDashboard userType="driver" userId="" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-passenger",
    element: (
      <ProtectedRoute>
        <PassengerDashboard userType="passenger" userId="" />
      </ProtectedRoute>
    ),
  },
]);
export default router;
