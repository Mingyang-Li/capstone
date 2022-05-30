import { useAuth0 } from "@auth0/auth0-react";

export const useLogout = () => {
  const { logout } = useAuth0();
  const logoutUser = () => {
    logout({ returnTo: window.location.origin })
  };
  return [logoutUser];
}
