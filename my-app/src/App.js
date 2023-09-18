import Lightswitch from "./Lightswitch";
import Todo from "./Todo";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const themeClass = darkMode ? "light" : "dark";
  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Lightswitch darkMode={darkMode} setDarkMode={setDarkMode} />
        <Todo darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default App;
