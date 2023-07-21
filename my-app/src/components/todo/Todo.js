import { useState } from "react";
import Data from "../Data";
import CreateTask from "./CreateTask";

function Todo({ Data }) {
  const [tasks, setTasks] = useState(Data);
  const addTask = (content) => {
    const newTasks = [...tasks, { content, completed: false }];
    setTasks(newTasks);
    console.log(newTasks);
  };

  return (
    <>
      <div>
        <div>TODO</div>
        {Data.map((task, index) => {
          return (
            <div key={index}>
              <img />
              <p>{task.content}</p>
            </div>
          );
        })}
      </div>
      <CreateTask addTask={addTask} />
    </>
  );
}

export default Todo;
