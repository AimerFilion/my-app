import { useState, useEffect } from "react";
import Data from "../Data";
import TodoList from "./TodoList";
const TodoForm = () => {
  // if you had press enter on the keyboard a new task will be add

  //   state to keep track of the value in the input
  const [addNewTask, setNewTask] = useState("");
  //   state to keep track of the todo data
  const [data, setData] = useState([]);
  console.log(Data);
  // state to get item from localstorage
  // const [items, setItems] = useState(() => {
  //   const savedItem = localStorage.getItem("todo");
  //   const parsedItem = JSON.parse(savedItem);
  //   return parsedItem || "";
  // });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);

  // to get the value of the input and set the new state
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setNewTask(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (addNewTask) {
      const newTodo = {
        id: data.length + 1,
        content: addNewTask.trim(),
        completed: false,
      };
      setData([newTodo, ...data]);
      setNewTask("");
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
          value={addNewTask}
          onChange={handleInputChange}
        />

        <button id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
      <TodoList Data={Data} />
    </div>
  );
};

export default TodoForm;
