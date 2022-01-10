import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isLogedIn }) => {
  return !isLogedIn ? <Navigate replace to="/" /> : children;
};

export default ProtectedRoute;