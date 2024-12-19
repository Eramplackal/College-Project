import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Replace with your auth logic

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the children if authenticated
  return children;
};

export default ProtectedRoute;
