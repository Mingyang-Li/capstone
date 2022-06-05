import InfoCard from "../../../stories/InfoCard/InfoCard";
import { blue } from "@mui/material/colors";
import { STEPS_VS_CALORIES_BY_DATE } from "../../../graphql/Queries";
import { useReactiveVar, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Query_Root } from "../../../generated/graphql";
import { startDateVar, endDateVar } from "../../../graphql/Store";
import CountUp from "react-countup";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const AverageDailySteps: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(STEPS_VS_CALORIES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const steps = data?.STEPS_BY_DATE;
  const stepsSum = steps
    ?.map((item: any) => item.sum)
    .reduce((partialSum, a) => partialSum + a, 0);
  const num = steps?.length;
  const avg = (stepsSum ?? 100) / (num ?? 1);

  return (
    <InfoCard
      loading={loading}
      title="Average Daily Steps"
      countUp={
        <CountUp
          start={0}
          end={Math.round(avg)}
          delay={0}
          duration={2.1}
          decimal="."
          separator=","
        />
      }
      icon={<DirectionsWalkIcon />}
      iconColor={blue[600]}
    />
  );
};

export default AverageDailySteps;
