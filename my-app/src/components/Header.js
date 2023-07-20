import image from "../images/bg-desktop-dark.jpg";
import { imageLight } from "../images/bg-desktop-light.jpg";

// Logic of the header when the button moon is click Dark mode
// Logic when the button sun is click Light mode

const Header = () => {
  return (
    <section>
      <img src={image} alt="dark mode" />
    </section>
  );
};

export default Header;
