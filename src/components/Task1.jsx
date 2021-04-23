import React, { useState } from "react";

//Create a component with 3 input fields.  When you type in the input field a "char count" increases for that input.  Use only ONE state variable and only ONE onChange handler function for all 3 fields

const Task1 = () => {
  const [inputs, setInputs] = useState([
    { id: "input1", placeholder: "Type Here", textlength: 0 },
    { id: "input2", placeholder: "Type Here", textlength: 0 },
    { id: "input3", placeholder: "Type Here", textlength: 0 },
  ]);

  const inputCounter = (e, input) => {
    let string = e.target.value.length;

    // input.textlength = string;

    // setInputs( [ {id: input.id, placeholder: input.placeholder, textlength: string}]);

    console.log(string);
    console.log(input);
  };

  return (
    <div>
      <h1>Task 1</h1>
      {inputs.map((input) => (
        <input
          type="text"
          key={input.id}
          id={input.id}
          placeholder={input.placeholder}
          onChange={(e) => inputCounter(e, input)}
        />
      ))}
      <h3>The current input character count is:</h3>
    </div>
  );
};

export default Task1;
