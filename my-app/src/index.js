import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import "./Styles/main.scss";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </StrictMode>,

  document.getElementById("root")
);
