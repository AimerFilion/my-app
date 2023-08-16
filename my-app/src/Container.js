import { useContext } from "react";
// import { CheckModeContext } from "./CheckModeContext";
import { DarkModeContext } from "./DarkModeContext";
//
import { checkIcon } from "./images/icon-check.svg";
//
import Lightswitch from "./Lightswitch";
import Todo from "./Todo";

function Container() {
  const { darkMode } = useContext(DarkModeContext);
  // const { checkMode } = useContext(CheckModeContext);

  return (
    <>
      <Lightswitch />
      <h1 className="title">TODO</h1>

      <div
        className={
          darkMode ? `Container Container-dark` : `Container Container-light`
        }
      >
        <Todo />
      </div>
    </>
  );
}

export default Container;
