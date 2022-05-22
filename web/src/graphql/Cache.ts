import { makeVar, InMemoryCache } from '@apollo/client';

// set start date as 30 days before "today"
const s = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
export const endDateVar = makeVar(new Date().toString());
export const startDateVar = makeVar(s.toString());

export const Cache = new InMemoryCache({
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
      },
    },
  },
});
