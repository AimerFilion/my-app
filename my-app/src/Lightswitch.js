import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import mobileDark from "../src/images/bg-mobile-dark.jpg";
import mobileLight from "../src/images/bg-mobile-light.jpg";
import desktopDark from "../src/images/bg-desktop-dark.jpg";
import desktopLight from "../src/images/bg-desktop-light.jpg";

function Lightswitch({ darkMode, setDarkMode }) {
  const switchThemeIcon = darkMode ? sun : moon;
  const switchBackground = darkMode ? mobileLight : mobileDark;
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <img
        className="hero-image"
        src={switchBackground}
        alt="background"
        onCLick={handleClick}
      />
      <h1 className="title">TODO</h1>

      <img
        className="lightSwitch"
        src={switchThemeIcon}
        alt="Lightswitch on"
        onClick={handleClick}
      />
    </div>
  );
}

export default Lightswitch;
