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
      <div className="circle"></div>
      <input
        type="text"
        className="input"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default CreateTask;
