import InfoCard from "../../../stories/InfoCard/InfoCard";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { red } from "@mui/material/colors";
import { STEPS_VS_CALORIES_BY_DATE } from "../../../graphql/Queries";
import { useReactiveVar, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Query_Root } from "../../../generated/graphql";
import { startDateVar, endDateVar } from "../../../graphql/Store";

const TotalCalories: React.FC = () => {
  const { user } = useAuth0();
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const userId = user?.email ? user?.email[13] : 1;

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<Query_Root>(STEPS_VS_CALORIES_BY_DATE, {
    variables: { userId, startDate, endDate },
  });

  const calories = data?.CALORIES_BY_DATE;
  const caloriesSum = calories
    ?.map((item: any) => item.sum)
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <InfoCard
      loading={loading}
      title="Total Calories"
      value={caloriesSum}
      unit=" KJs"
      icon={<LocalFireDepartmentIcon />}
      iconColor={red[600]}
    />
  );
};

export default TotalCalories;
