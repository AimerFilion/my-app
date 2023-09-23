import Lightswitch from "./Lightswitch";
import Todo from "./Todo";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./Styles/main.scss";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const themeClass = darkMode ? "light" : "dark";
  return (
    <>
      <Router>
        <body className={`${darkMode ? "" : "dark"}`}>
          <div className={`wrapper ${themeClass}`}>
            <div className="container">
              <Lightswitch darkMode={darkMode} setDarkMode={setDarkMode} />
              <Todo darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            {/* <p className="credit">Made by Aimer Filion</p> */}
          </div>
        </body>
      </Router>
    </>
  );
};

export default App;
