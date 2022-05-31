import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import LogoutButton from "../components/auth/LogoutButton";
import Loading from "../components/Loading";
import { Forbidden } from "./Forbidden";

export const Dashboard: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    console.log("isAuthenticated: " + isAuthenticated);
  }, [isAuthenticated]);
  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <Forbidden />;
  return (
    <>
      <h2>DashboardPage</h2>
      <h3>isAuthenticated: {isAuthenticated}</h3>
      <LogoutButton />
    </>
  );
};
