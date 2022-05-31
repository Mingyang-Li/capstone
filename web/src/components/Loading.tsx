import React from "react";

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div
    className="spinner"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "baseline",
    }}
  >
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
