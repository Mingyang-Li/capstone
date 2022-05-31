import { gql } from "@apollo/client";

export const CALORIES_BY_DATE = gql`
  query ($userId: Int, $startDate: date!, $endDate: date!) {
    CALORIES_BY_DATE(
      where: {
        userId: { _eq: $userId }
        date: { _gte: $startDate, _lte: $endDate }
      }
    ) {
      date
      sum
    }
  }
`;
