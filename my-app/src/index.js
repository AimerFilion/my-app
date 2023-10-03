import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./Styles/main.scss";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </StrictMode>
);
reportWebVitals();
