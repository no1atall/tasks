import React from "react";

//Create a component with 3 input fields.  When you type in the input field a "char count" increases for that input.  Use only ONE state variable and only ONE onChange handler function for all 3 fields

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
