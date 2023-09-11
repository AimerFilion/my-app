import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import Lightswitch from "./Lightswitch";
import Todo from "./Todo";

function Container() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 className="title">TODO</h1>
          <Lightswitch />
          {/* <div
            className={
              darkMode
                ? `container container-dark`
                : `container container-light`
            }
          ></div> */}
        </div>
        <Todo />
      </div>
    </>
  );
}

export default Container;
