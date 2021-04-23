import React, { useState } from "react";

//Create a component with 2 columns, one column is a list of selected items, the 2nd column is a list of all items that you can select.  When you click on an item from the "all items" column, it moves it to the "currently selected items".  When you click on an item from the "currently selected" column it moves it back to the "all items" column.

const Task2 = () => {
  const [veggies, setVeggies] = useState([
    { veggie: "carrots", id: 0 },
    { veggie: "onions", id: 1 },
    { veggie: "tomatoes", id: 2 },
    { veggie: "peas", id: 3 },
    { veggie: "cucumber", id: 4 },
    { veggie: "lettuce", id: 5 },
    { veggie: "peppers", id: 6 },
    { veggie: "eggplant", id: 7 },
  ]);

  const [toppings, setToppings] = useState([]);

  const operationType = {
    veggieOperation: 1,
    toppingOperation: 2,
  };

  const addVeggie = (veg, id) => {
    setVeggies([...veggies, { veggie: veg, id }]);
  };

  const deleteVeggie = (id) => {
    setVeggies(veggies.filter((veggie) => veggie.id !== id));
  };

  const addTopping = (veg, id) => {
    setToppings([...toppings, { topping: veg, id }]);
  };

  const deleteTopping = (id) => {
    setToppings(toppings.filter((topping) => topping.id !== id));
  };

  const clickHandler = (data, opType) => {
    console.log(data);
    console.log(opType);

    switch (opType) {
      case operationType.veggieOperation:
        addTopping(data.veggie, data.id);
        deleteVeggie(data.id);
        break;
      case operationType.toppingOperation:
        addVeggie(data.topping, data.id);
        deleteTopping(data.id);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Task 2</h1>
      <div className="container">
        <div className="column all">
          <ul>
            {veggies.map((veggie) => (
              <li
                key={veggie.id}
                onClick={() =>
                  clickHandler(veggie, operationType.veggieOperation)
                }
              >
                {veggie.veggie}
              </li>
            ))}
          </ul>
        </div>
        <div className="column list">
          <h2>here is column 2</h2>
          <ul>
            {toppings.map((topping) => (
              <li
                key={topping.id}
                onClick={() =>
                  clickHandler(topping, operationType.toppingOperation)
                }
              >
                {topping.topping}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task2;
