import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import AppContainer from "../stories/appContainer/AppContainer";
import { Forbidden } from "./Forbidden";
import BasicDateRangePicker from "../components/basicDateRangePicker/BasicDateRangePicker";
import StepsVsCaloriesByDate from "../components/reports/stepsVsCaloriesByDate/StepsVsCaloriesByDate";
import StepsVsDistanceByDate from "../components/reports/stepsVsDistanceByDate/StepsVsDistanceByDate";
import CaloriesVsDistance from "../components/reports/caloriesVsDistance/CaloriesVsDistance";
import LogoutModal from "../stories/logoutModal/LogoutModal";
import { Button } from "../stories/button/Button";

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
      <Button label={"test"} />
      <LogoutModal open={true} />
      <StepsVsCaloriesByDate />
      <br></br>
      <StepsVsDistanceByDate />
      <br></br>
      <CaloriesVsDistance />
    </>
  );
};

export const Dashboard: React.FC = () => (
  <AppContainer title="Dashboard" contents={<Contents />} />
);
