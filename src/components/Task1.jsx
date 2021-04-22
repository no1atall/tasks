import React from "react";

const Task1 = () => {
  const inputCounter = (e) => {
    let string = e.target.value;

    console.log(string.length);
  };

  return (
    <div>
      <h1>Task 1</h1>
      <input onChange={inputCounter} type="text" />
      <input onChange={inputCounter} type="text" />
      <input onChange={inputCounter} type="text" />
      <h3>The current input character count is:</h3>
    </div>
  );
};

export default Task1;
