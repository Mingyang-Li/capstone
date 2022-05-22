import { gql } from '@apollo/client';

export const QUERY_SAMPLE = gql`
  query INCOME_BY_PAYMENT_METHOD($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      incomePaymentMethod
      sum
    }
  }
`;

