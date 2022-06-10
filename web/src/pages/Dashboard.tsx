import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import AppContainer from "../stories/appContainer/AppContainer";
import { Forbidden } from "./Forbidden";
import BasicDateRangePicker from "../components/basicDateRangePicker/BasicDateRangePicker";
import StepsVsCaloriesByDate from "../components/reports/stepsVsCaloriesByDate/StepsVsCaloriesByDate";
import CaloriesVsDistance from "../components/reports/caloriesVsDistance/CaloriesVsDistance";
import Grid from "@mui/material/Grid";
import TotalCalories from "../components/cards/totalCalories/TotalCalories";
import AverageDailyCalories from "../components/cards/averageDailyCalories/AverageDailyCalories";
import TotalSteps from "../components/cards/totalSteps/TotalSteps";
import AverageDailySteps from "../components/cards/averageDailySteps/AverageDailySteps";
import DailyHeartRate from "../components/reports/dailyHeartRate/DailyHeartRate";
import DailyVeryActiveMinutes from "../components/reports/dailyVeryActiveMinutes/DailyVeryActiveMinutes";
import DoughnutChart from "../stories/charts/doughnutChart/DoughnutChart";
import HeartRateBreakDown from "../components/reports/heartRateBreakBreakDown/HeartRateBreakDown";
import CaloriesByDate from "../components/reports/caloriesByDate/CaloriesByDate";

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
        <Grid item md={3} sm={12}>
          <TotalCalories />
        </Grid>
        <Grid item md={3} sm={12}>
          <AverageDailyCalories />
        </Grid>
        <Grid item md={3} sm={12}>
          <TotalSteps />
        </Grid>
        <Grid item md={3} sm={12}>
          <AverageDailySteps />
        </Grid>

        <Grid item md={6} sm={12}>
          <StepsVsCaloriesByDate />
        </Grid>
        <Grid item md={6} sm={12}>
          <DailyVeryActiveMinutes />
        </Grid>
        <Grid item md={6} sm={12}>
          <CaloriesByDate />
        </Grid>
        <Grid item md={6} sm={12}>
          <CaloriesVsDistance />
        </Grid>
      </Grid>
      <br />
    </>
  );
};

export const Dashboard: React.FC = () => (
  <AppContainer title="Dashboard" contents={<Contents />} />
);
