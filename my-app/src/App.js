import Lightswitch from "./Lightswitch";
import Todo from "./Todo";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const themeClass = darkMode ? "light" : "dark";
  return (
    <body className={`${darkMode ? "" : "dark"}`}>
      <div className={`wrapper ${themeClass}`}>
        <div className="container">
          <Lightswitch darkMode={darkMode} setDarkMode={setDarkMode} />
          <Todo darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        {/* <p className="credit">Made by Aimer Filion</p> */}
      </div>
    </body>
  );
};

export default App;
