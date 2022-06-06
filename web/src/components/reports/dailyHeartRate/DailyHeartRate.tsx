import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { HEART_RATE } from "../../../graphql/Queries";
import { heartRateDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import AreaChart from "../../../stories/charts/areaChart/AreaChart";
import BasicDatePicker from "../../basicDatePicker/BasicDatePicker";

const DailyHeartRate: React.FC = () => {
  const { user } = useAuth0();
  const date = useReactiveVar(heartRateDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const localDate = date;

  const { data, loading } = useQuery<Query_Root>(HEART_RATE, {
    variables: { userId, date: localDate },
  });

  const d = data?.HeartRate;
  console.log(d?.length);
  const labels = d?.map((item: any) => item.dateTime).slice(0, 3000);
  const values = d?.map((item: any) => item.bpm).slice(0, 3000);
  const series: Series[] = [
    {
      name: "bpm",
      data: values as number[],
    },
  ];
  return (
    <>
      <ChartContainer
        title={"Daily Heart Rate"}
        component={
          <>
            <BasicDatePicker />
            <br></br>
            <AreaChart labels={labels} series={series} loading={loading} />
          </>
        }
      />
    </>
  );
};

export default DailyHeartRate;
