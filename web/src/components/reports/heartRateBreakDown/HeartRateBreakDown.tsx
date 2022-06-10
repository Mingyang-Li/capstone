import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useCallback, useState } from "react";
import { Query_Root } from "../../../generated/graphql";
import { HEART_RATE_BY_DATE } from "../../../graphql/Queries";
import { heartRateDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import DoughnutChart from "../../../stories/charts/doughnutChart/DoughnutChart";
import BasicDatePicker from "../../basicDatePicker/BasicDatePicker";

const HeartRateBreakDown: React.FC = () => {
  const [fetched, setFetched] = useState(false);
  const { user } = useAuth0();
  const date = useReactiveVar(heartRateDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const localDate = date;

  const [fetchHeartRate, { data, loading }] = useLazyQuery<Query_Root>(
    HEART_RATE_BY_DATE,
    {
      variables: { userId, date: localDate },
    }
  );

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

  const labels = ["Fast bpm", "Resting bpm", "Slow bpm"];
  const values = Object.values(breakdown);

  return (
    <>
      <ChartContainer
        title={"No. of bpm by status"}
        component={
          <>
            <Stack direction="row" spacing={2}>
              <BasicDatePicker />
              <Tooltip
                title={
                  "You need to click this button to see your heart rate data (approx. 9000 data points for each day)"
                }
                placement="right"
              >
                <Button
                  variant="contained"
                  onClick={useCallback(() => {
                    fetchHeartRate();
                    setFetched(true);
                  }, [fetchHeartRate])}
                  disabled={fetched}
                >
                  Fetch data!
                </Button>
              </Tooltip>
            </Stack>
            <br></br>
            <DoughnutChart labels={labels} values={values} loading={loading} />
          </>
        }
      />
    </>
  );
};

export default HeartRateBreakDown;
