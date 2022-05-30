import React from "react";
import { useLogout } from "../../hooks/useLogout";

const LogoutButton = () => {
  const [logoutUser] = useLogout();

  return (
    <button onClick={() => logoutUser()}>
      Log Out
    </button>
  );
};

export default LogoutButton;