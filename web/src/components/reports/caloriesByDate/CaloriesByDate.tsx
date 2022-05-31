import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { CALORIES_BY_DATE } from "../../../graphql/Queries";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/appContainer/ChartContainer";
import AreaChart from "../../../stories/charts/areaChart/AreaChart";

const CaloriesByDate: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery(CALORIES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const d = data?.CALORIES_BY_DATE;
  const labels = d?.map((item: any) => item.date);
  const values = d?.map((item: any) => item.sum);
  return (
    <>
      <ChartContainer
        title={"Calories by date"}
        component={
          <AreaChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default CaloriesByDate;
