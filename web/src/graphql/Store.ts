import { makeVar, InMemoryCache } from "@apollo/client";

// set start date as 2019-10-30 - var also used in datepickers
export const minDate = new Date("2019-10-30");
export const startDateVar = makeVar(minDate);

// default end date to be the month after
export const endDateVar = makeVar(new Date("2019-11-30"));

export const Store = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        startDate: {
          read() {
            return startDateVar();
          },
        },
        endDate: {
          read() {
            return endDateVar();
          },
        },
        userId: {
          read() {
            return;
          },
        },
      },
    },
  },
});
