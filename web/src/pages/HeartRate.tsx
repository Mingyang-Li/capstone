import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import AppContainer from "../stories/appContainer/AppContainer";
import { Forbidden } from "./Forbidden";
import BasicDateRangePicker from "../components/basicDateRangePicker/BasicDateRangePicker";

const Contents: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("isAuthenticated: " + isAuthenticated);
  }, [isAuthenticated]);

  if (isLoading || !isAuthenticated) return <Loading />;
  if (!isAuthenticated) return <Forbidden />;

  return (
    <>
      <BasicDateRangePicker />
      <br></br>
    </>
  );
};

export const HeartRate: React.FC = () => (
  <AppContainer title="HeartRate" contents={<Contents />} />
);
