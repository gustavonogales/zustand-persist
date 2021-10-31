import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Testing } from "./pages/Testing";

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      <Testing />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
