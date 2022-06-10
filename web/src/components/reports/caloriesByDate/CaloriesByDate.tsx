import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { CALORIES_BY_DATE } from "../../../graphql/Queries";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import ColumnChart from "../../../stories/charts/columnChart/ColumChart";

const CaloriesByDate: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(CALORIES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const d = data?.CALORIES_BY_DATE;
  const labels = d?.map((item: any) => item.date);
  const values = d?.map((item: any) => item.sum);
  const series: Series[] = [
    {
      name: "Calories",
      data: values as number[],
    },
  ];
  return (
    <>
      <ChartContainer
        title={"Calories by date"}
        component={
          <ColumnChart labels={labels} series={series} loading={loading} />
        }
      />
    </>
  );
};

export default CaloriesByDate;
