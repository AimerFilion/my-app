import { useState, useEffect } from "react";
import Data from "../Data";
import Todo from "./Todo";
const CreateTask = ({ addTask }) => {
  // if you had press enter on the keyboard a new task will be add

  //   state to keep track of the value in the input
  const [task, setTask] = useState("");
  //   state to keep track of the todo data
  const [data, setData] = useState([]);

  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);

  // to get the value of the input and set the new state
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    console.log(setTask === e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task) {
      const newTodo = {
        id: data.length + 1,
        content: task.trim(),
        completed: false,
      };
      console.log(setData([newTodo, ...Data]));
      setTask("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput"></label>
        <input
          type="text"
          name="todo-input"
          placeholder="Create a new todo..."
          value={task}
          onChange={handleInputChange}
        />

        <button id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
      <Todo Data={Data} />
    </div>
  );
};

export default CreateTask;
