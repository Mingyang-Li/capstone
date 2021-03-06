import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { CALORIES_VS_DISTANCE_BY_DATE } from "../../../graphql/Queries";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import AreaChart from "../../../stories/charts/areaChart/AreaChart";

const CaloriesVsDistance: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(CALORIES_VS_DISTANCE_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const distance = data?.DISTANCE_BY_DATE;
  const labels = distance?.map((item: any) => item.date);
  const values_distance = distance?.map((item: any) => item.sum / 100);

  const series: Series[] = [
    {
      name: "Distance (m)",
      data: values_distance as number[],
    },
  ];
  return (
    <>
      <ChartContainer
        title={"Distance by date"}
        component={
          <AreaChart labels={labels} series={series} loading={loading} />
        }
      />
    </>
  );
};

export default CaloriesVsDistance;
