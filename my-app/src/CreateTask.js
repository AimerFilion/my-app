import { useState } from "react";

const CreateTask = ({ addTask }) => {
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
        className="input"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="circle"></div>
    </form>
  );
};

export default CreateTask;
