import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error storing tasks in localStorage:", error);
    }
  }, [tasks]);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error retrieving tasks from localStorage:", error);
    }
  }, []);

  const addTask = (content) => {
    const newTasks = [...tasks, { content, completed: false }];
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    console.log(index);
  };

  return (
    <div>
      <div>
        <CreateTask addTask={addTask} />
        <div className="todo-list-container">
          <ul className="todo-list">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? "completed" : ""}>
                {/* toggleTaskCompletion function inside the onClick handler of each task, enable the ability to toggle the completed status for each individual task. */}
                <span
                  className="circle"
                  key={index}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.completed && (
                    <img className="check" src={check} alt="check" />
                  )}
                </span>
                {task.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
