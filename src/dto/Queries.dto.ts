/*
- Feel free to define the response type of your GraphQL queries here, or delete it if you're a bold dev who doesn't need type safety:)
- Below types are just examples for your reference.
- For e.g, the data returned by your query hasa type of IncomeGroupByQueryResponse, which has an array of IncomeGroupByQueryBody
*/

// INCOME_BY_BLAHBLAH
export interface IncomeGroupByQueryResponse {
  incomeGroupBy: IncomeGroupByQueryBody[];
}

export interface IncomeGroupByQueryBody {
  incomePaidBy?: string;
  incomePaymentMethod?: string;
  incomeType?: string;
  sum?: number;
  count?: number;
  currency?: string;
  date?: string;
  __typename?: string;
}
