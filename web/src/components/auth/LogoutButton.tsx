import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="h-12 px-6 text-indigo-100 transition-colors duration-350 bg-green-600 rounded-lg focus:shadow-outline hover:bg-red-800"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
