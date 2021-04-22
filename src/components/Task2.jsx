import React, { useState } from 'react'


//Create a component with 2 columns, one column is a list of selected items, the 2nd column is a list of all items that you can select.  When you click on an item from the "all items" column, it moves it to the "currently selected items".  When you click on an item from the "currently selected" column it moves it back to the "all items" column.


const Task2 = () => {

    const [ veggies , setVeggies] = useState([
        {veggie: "carrots", id: 1},
        {veggie: "onions", id: 2},
        {veggie: "tomatoes", id: 3},
        {veggie: "peas", id: 4},
        {veggie: "cucumber", id: 5},
        {veggie: "lettuce", id: 6},
        {veggie: "peppers", id: 7},
        {veggie: "eggplant", id: 8},
    ])

    const [toppings, setToppings] = useState([
        {topping: "corn", id:9}
    ])


    const [data, setData] = useState()

    const addVeggie = () => {
        
    }
    
    
    const deleteVeggie = () => {

    }

    const addToppings = (veg) => {
        setToppings([...toppings, { topping: veg , id: 10}])
        // console.log(toppings)
    }

    const deleteToppings = () => {

    }

    const clickHandler = (e, veggie) => {
        e.preventDefault()
        console.log(e)
        console.log(typeof(veggie))
        // console.log(e.target.firstChild)
        // console.log(data)

        // let myData =setData(e.target.firstChild)
        // console.log(myData)
        // console.log(data)
        // setData(e.target.firstChild)

        // let veg = setData(e.target.firstChild)
        // console.log(veg)
        // addToppings(veg)



        // console.log( e, veg )
    }
    

    return ( 
        <div>
            <h1>Task 2</h1>
            <div className="container">
                <div className="column all">
                    <ul>
                        {veggies.map((veggie, index) => (
                            <li key={veggie.id} onClick={clickHandler}>{veggie.veggie}, {index}</li>
                        )) }
                    </ul>
                </div>
                <div className="column list">
                    <h2>here is column 2</h2>
                    <ul>
                        {toppings.map((topping) => (
                            <li key={topping.id}>{topping.topping}</li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>


     );
}
 
export default Task2;