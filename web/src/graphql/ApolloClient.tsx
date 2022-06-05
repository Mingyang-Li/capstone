import { ApolloClient, HttpLink } from "@apollo/client";
import { ConfigService } from "../services/Config.service";
import { Store } from "./Store";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: ConfigService.REACT_APP_API_URL,
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": ConfigService.REACT_APP_HASURA_ADMIN_SECRET,
    },
  }),
  cache: Store,
});
