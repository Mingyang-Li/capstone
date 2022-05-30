import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const login = () => {
    loginWithRedirect();
    navigate('/dashboard');
  };
  return [login];
}
