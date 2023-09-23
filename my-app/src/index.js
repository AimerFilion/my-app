import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { React } from "react";
import App from "./App";
import "./Styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename={window.location.pathname || ""}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
