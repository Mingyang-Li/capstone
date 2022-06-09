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

export const DISTANCE_VS_STEPS_BY_DATE = gql`
  query ($userId: Int, $startDate: date!, $endDate: date!) {
    DISTANCE_BY_DATE(
      where: {
        userId: { _eq: $userId }
        date: { _gte: $startDate, _lte: $endDate }
      }
    ) {
      date
      sum
    }

    STEPS_BY_DATE(
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

export const STEPS_VS_CALORIES_BY_DATE = gql`
  query ($userId: Int, $startDate: date!, $endDate: date!) {
    STEPS_BY_DATE(
      where: {
        userId: { _eq: $userId }
        date: { _gte: $startDate, _lte: $endDate }
      }
    ) {
      date
      sum
    }

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

export const CALORIES_VS_DISTANCE_BY_DATE = gql`
  query ($userId: Int, $startDate: date!, $endDate: date!) {
    DISTANCE_BY_DATE(
      where: {
        userId: { _eq: $userId }
        date: { _gte: $startDate, _lte: $endDate }
      }
    ) {
      date
      sum
    }

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

export const HEART_RATE = gql`
  query ($userId: Int, $date: date!) {
    HeartRate(where: { userId: { _eq: $userId }, date: { _eq: $date } }) {
      dateTime
      bpm
    }
  }
`;

export const VERY_ACTIVE_MINUTES_BY_DATE = gql`
  query ($userId: Int, $startDate: date!, $endDate: date!) {
    VERY_ACTIVE_MINUTES_BY_DATE(
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
