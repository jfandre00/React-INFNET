import { useLayoutEffect } from "react";


function List() {

    const fruits = [{id: 1, name: 'Apple', calories: 95}, 
        {id: 2, name: 'Banana', calories: 110}, 
        {id: 3, name: 'Cherry', calories: 55}, 
        {id: 4, name: 'Date', calories: 120}, 
        {id: 5, name: 'Elderberry', calories: 73}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name in reverse alphabetical order
    // fruits.sort((a, b) => a.calories - b.calories); // Sort by calories in ascending order
    //fruits.sort((a, b) => b.calories - a.calories); // Sort by calories in descending order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp; 
                                                <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}
export default List;