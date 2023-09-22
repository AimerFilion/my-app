import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";

function Lightswitch({ darkMode, setDarkMode }) {
  const switchThemeIcon = darkMode ? moon : sun;

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="header__switch">
        <h1 className="title">TODO</h1>

        <img
          className="lightSwitch"
          src={switchThemeIcon}
          alt="Lightswitch on"
          onClick={handleClick}
        />
      </header>
    </>
  );
}

export default Lightswitch;
