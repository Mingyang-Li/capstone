module.exports = {
  schema: [
    {
      "https://capstone.hasura.app/v1/graphql": {
        "headers": {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET
        }
      },
    },
  ],
  documents: ["./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
