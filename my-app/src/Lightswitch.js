import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import mobileDark from "../src/images/bg-mobile-dark.jpg";
import mobileLight from "../src/images/bg-mobile-light.jpg";
import desktopDark from "../src/images/bg-desktop-dark.jpg";
import desktopLight from "../src/images/bg-desktop-light.jpg";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <>
      <img
        className="hero-image"
        src={darkMode ? mobileDark : mobileLight}
        alt="Lightswitch on"
        onCLick={handleClick}
      />

      <div className="column">
        <img
          className="lightSwitch"
          src={darkMode ? sun : moon}
          alt="Lightswitch on"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default Lightswitch;
