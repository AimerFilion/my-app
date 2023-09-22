import { useState } from "react";

const CreateTask = ({ addTask, darkMode }) => {
  //   state to keep track of the value in the input

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`input ${darkMode ? "" : "dark"}`}
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="circle">
        <span className="circle"></span>
      </div>
    </form>
  );
};

export default CreateTask;
