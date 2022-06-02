import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { STEPS_VS_CALORIES_BY_DATE } from "../../../graphql/Queries";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import AreaChart from "../../../stories/charts/areaChart/AreaChart";

const StepsVsCaloriesByDate: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(STEPS_VS_CALORIES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const distance = data?.CALORIES_BY_DATE;
  const labels = distance?.map((item: any) => item.date);
  const values_distance = distance?.map((item: any) => item.sum);

  const steps = data?.STEPS_BY_DATE;
  const values_steps = steps?.map((item: any) => item.sum);

  const series: Series[] = [
    {
      name: "Distance",
      data: values_distance as number[],
    },
    {
      name: "Steps",
      data: values_steps as number[],
    },
  ];
  return (
    <>
      <ChartContainer
        title={"Steps VS Calories by date"}
        component={
          <AreaChart labels={labels} series={series} loading={loading} />
        }
      />
    </>
  );
};

export default StepsVsCaloriesByDate;
