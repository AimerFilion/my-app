import React, { useState } from "react";
import check from "./images/icon-check.svg";
import CreateTask from "./CreateTask";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { content: "Complete online JavaScript course", completed: true },
    { content: "Jog around the park 3x", completed: false },
    { content: "10 minutes meditation", completed: false },
    { content: "Read for 1 hour", completed: false },
    { content: "Pick up groceries", completed: false },
    { content: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const [filter, setFilter] = useState("All");

  const addTask = (content) => {
    const newTasks = [...tasks, { content, completed: false }];
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(uncompletedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true; // Keep all tasks
    } else if (filter === "Active") {
      return !task.completed; // Keep only tasks that are not completed
    } else if (filter === "Completed") {
      return task.completed; // Keep only tasks that are completed
    }
    return true; // Default: Keep all tasks
  });

  return (
    <div>
      <div>
        <CreateTask addTask={addTask} />
        <div className="todo-list-container">
          <ul className="todo-list">
            {filteredTasks.map((task, index) => (
              <li
                key={index}
                className={task.completed ? "completed" : "uncompleted"}
              >
                {/* toggleTaskCompletion function inside the onClick handler of each task, enable the ability to toggle the completed status for each individual task. */}
                <div
                  className="circle"
                  key={index}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.completed && (
                    <img className="check" src={check} alt="check" />
                  )}
                </div>
                {task.content}
              </li>
            ))}
          </ul>
        </div>
        <div className="filteredTasks">
          <span>{tasks.length} items left</span>
          <span
            onClick={() => {
              setFilter("All");
            }}
          >
            All
          </span>
          <span
            onClick={() => {
              setFilter("Active");
            }}
          >
            Active
          </span>
          <span
            onClick={() => {
              setFilter("Completed");
            }}
          >
            Completed
          </span>
          <span onClick={deleteTask}>Clear completed</span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
