import React from "react";

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div
    className="spinner"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "baseline",
      height: "100%",
    }}
  >
    <img src={loadingImg} alt="Loading..." style={{ top: "30%", left: "45%" }} />
    <h3>Hold your heart rate, we're loading...</h3>
  </div>
);

export default Loading;
