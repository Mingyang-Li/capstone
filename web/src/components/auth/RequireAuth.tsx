import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = (props: React.ReactElement<any, any>) => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? props : <Navigate to="/login" replace />;
  }
  