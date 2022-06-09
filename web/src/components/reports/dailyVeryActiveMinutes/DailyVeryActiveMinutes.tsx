import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { VERY_ACTIVE_MINUTES_BY_DATE } from "../../../graphql/Queries";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import ColumnChart from "../../../stories/charts/columnChart/ColumChart";

const DailyVeryActiveMinutes: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(VERY_ACTIVE_MINUTES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const vam = data?.VERY_ACTIVE_MINUTES_BY_DATE;
  console.table(vam);
  const labels = vam?.map((item: any) => item.date);
  const values = vam?.map((item: any) => item.sum);

  const series: Series[] = [
    {
      name: "Very active minutes",
      data: values as number[],
    },
  ];

  return (
    <>
      <ChartContainer
        title={"Very active minutes by date"}
        component={
          <ColumnChart labels={labels} series={series} loading={loading} />
        }
      />
    </>
  );
};

export default DailyVeryActiveMinutes;
