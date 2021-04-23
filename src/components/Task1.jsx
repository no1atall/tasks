import React, { useState } from "react";

//Create a component with 3 input fields.  When you type in the input field a "char count" increases for that input.  Use only ONE state variable and only ONE onChange handler function for all 3 fields

const Task1 = () => {
  const [inputs, setInputs] = useState([
    { id: "input1", placeholder: "Type Here", type: "text" },
    { id: "input2", placeholder: "Type Here", type: "password" },
    { id: "input3", placeholder: "Type Here", type: "email" },
  ]);

  const [textLength, setTextLength] = useState(0);
  const [inputType, setInputType] = useState("");

  const inputCounter = (e) => {
    setTextLength(e.target.value.length);
    setInputType(e.target.type);
  };

  return (
    <div>
      <h1>Task 1</h1>
      {inputs.map((input) => (
        <input
          type={input.type}
          key={input.id}
          id={input.id}
          placeholder={input.placeholder}
          onChange={(e) => inputCounter(e)}
        />
      ))}
      <h3>
        The current input character count is: {textLength}, and the type is: {inputType}
      </h3>
    </div>
  );
};

export default Task1;
