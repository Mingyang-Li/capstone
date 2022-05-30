import React from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginButton: React.FC = () => {
  const [login] = useLogin();
  return <button onClick={() => login()}>Log In</button>;
};

export default LoginButton;