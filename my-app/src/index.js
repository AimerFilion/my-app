import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { React } from "react";
import App from "./App";
import "./Styles/main.scss";
import { BrowserRouter, Route, Index } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Route exact path="/" component={App} />
      <App />
    </BrowserRouter>
  </StrictMode>
);
