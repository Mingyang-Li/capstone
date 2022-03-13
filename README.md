# React GraphQL Auth0 template

### Opinionated admin dashboard template for building your next internal app using React, Apollo client, Auth0, material-ui and tailwind 

### 🛠️ Technologies used
| Purpose | Tools |
| :--- | :---- |
| ✅ Language | TypeScript |
| ✅ Authentication | Auth0 SDK |
| ✅ Routing | React-Router |
| ✅ State management | Apollo client |
| ✅ Developer experience (Linting) | Eslint + Prettier |
| ✅ Styling - structure | Material-UI |
| ✅ Styling - details | TailwindCSS |

### ⭐ Feature highlights
| No. | Description |
| :--- | :---- |
| 1. | Logging in with Google using Auth0 |
| 2. | Reusable chart components from `/components/charts` for data-visualisation - you can wrap them around `ChartContainer` components and simply pass values into charts. It is recommended to keep charts themselves as 'dumb components' which are not responsible for any calculations, this means you have freedom to write your own logic for data-modelling |
| 3. | Built-in integration for Apollo Client to leverage GraphQL |
| 4. | Prebuilt pages for basic authentication flow (excluding password retrievals etc) - I'm keeping it simple here so you can be creative:)

### Run the app
```bash
# Install dependencies
yarn

# build
yarn build

# test
yarn test

# running
yarn start
```
