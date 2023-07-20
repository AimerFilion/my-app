import { useState } from "react";

function TodoList({ Data }) {
  return (
    <>
      <div>
        {Data.map((task, index) => {
          return (
            <div key={index}>
              <img />
              <p>{task.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
