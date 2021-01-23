import React from "react";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { render } from "react-dom";
import App from "./app";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
