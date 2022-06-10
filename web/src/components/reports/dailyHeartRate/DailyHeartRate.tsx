import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useCallback, useState } from "react";
import { Series } from "../../../dto/Charts.dto";
import { Query_Root } from "../../../generated/graphql";
import { HEART_RATE_BY_DATE } from "../../../graphql/Queries";
import { heartRateDateVar } from "../../../graphql/Store";
import { ChartContainer } from "../../../stories/chartContainer/ChartContainer";
import LineChart from "../../../stories/charts/lineChart/LineChart";
import BasicDatePicker from "../../basicDatePicker/BasicDatePicker";

const DailyHeartRate: React.FC = () => {
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
  console.log(d?.length);
  const labels = d?.map((item: any) => item.dateTime);
  const values = d?.map((item: any) => item.bpm);
  const series: Series[] = [
    {
      name: "High bpm",
      type: "line",
      data: values?.map(() => 100) as number[],
    },
    {
      name: "Your bpm",
      data: values as number[],
    },
    {
      name: "Resting bpm",
      type: "line",
      data: values?.map(() => 60) as number[],
    },
  ];
  return (
    <>
      <ChartContainer
        title={"❤️ Daily Heart Rate"}
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
            <LineChart labels={labels} series={series} loading={loading} />
          </>
        }
      />
    </>
  );
};

export default DailyHeartRate;
