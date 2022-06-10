import { useQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { HEART_RATE_BY_DATE } from "../../../graphql/Queries";
import { heartRateDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import DoughnutChart from "../../../stories/charts/doughnutChart/DoughnutChart";
import BasicDatePicker from "../../basicDatePicker/BasicDatePicker";

const HeartRateBreakDown: React.FC = () => {
  const { user } = useAuth0();
  const date = useReactiveVar(heartRateDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const localDate = date;

  const { data, loading } = useQuery<Query_Root>(HEART_RATE_BY_DATE, {
    variables: { userId, date: localDate },
  });

  const d = data?.HeartRate;
  const bpm = d?.map((item: any) => item.bpm);
  const breakdown = {
    bpmIsRestingHr: 0,
    bpmIsSlowHr: 0,
    bpmIsFastHr: 0,
  };

  bpm?.forEach((b) => {
    if (b >= 60 && b <= 100) {
      breakdown.bpmIsRestingHr += 1;
    } else if (b < 60) {
      breakdown.bpmIsSlowHr += 1;
    } else if (b > 100) {
      breakdown.bpmIsFastHr += 1;
    }
  });

  const labels = [
    "Resting heart rate (betweeb 60 bpm and under 100 bpm)",
    "Slow heart rate (below 60 bpm)",
    "Fast heart rate (more than 100 bpm)",
  ];
  const values = Object.values(breakdown);

  return (
    <>
      <ChartContainer
        title={"Heart Rate break down"}
        component={
          <>
            <BasicDatePicker />
            <DoughnutChart labels={labels} values={values} loading={loading} />
          </>
        }
      />
    </>
  );
};

export default HeartRateBreakDown;
