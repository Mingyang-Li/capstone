import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import AppContainer from "../stories/appContainer/AppContainer";
import { Forbidden } from "./Forbidden";
import BasicDateRangePicker from "../components/basicDateRangePicker/BasicDateRangePicker";
import StepsVsCaloriesByDate from "../components/reports/stepsVsCaloriesByDate/StepsVsCaloriesByDate";
import StepsVsDistanceByDate from "../components/reports/stepsVsDistanceByDate/StepsVsDistanceByDate";
import CaloriesVsDistance from "../components/reports/caloriesVsDistance/CaloriesVsDistance";
import InfoCard from "../stories/InfoCard/InfoCard";
import Grid from "@mui/material/Grid";
import TotalCalories from "../components/cards/totalCalories/TotalCalories";
import AverageDailyCalories from "../components/cards/averageDailyCalories/AverageDailyCalories";

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
      <Grid container spacing={2}>
        <Grid item md={3}>
          <TotalCalories />
        </Grid>
        <Grid item md={3}>
          <AverageDailyCalories />
        </Grid>
        <Grid item md={3}>
          <InfoCard />
        </Grid>
        <Grid item md={3}>
          <InfoCard />
        </Grid>
      </Grid>
      <br></br>
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
