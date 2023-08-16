import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import imagedark from "../src/images/bg-desktop-dark.jpg";
import imageLight from "../src/images/bg-desktop-light.jpg";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <>
      <div className="hero">
        <img
          className="hero-image"
          src={darkMode ? imagedark : imageLight}
          alt="Lightswitch on"
          onCLick={handleClick}
        />
      </div>

      <div className="Lightswitch">
        <img
          src={darkMode ? sun : moon}
          alt="Lightswitch on"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default Lightswitch;
