import { useAuth0 } from "@auth0/auth0-react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const login = useCallback(() => {
    loginWithRedirect().then(() => navigate("/dashboard"));
  }, [navigate]);
  return <button onClick={() => login()}>Log In</button>;
};

export default LoginButton;
