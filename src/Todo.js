import React, { useEffect, useState } from 'react';
import TodoItems from './TodoItems'

const Todo = () =>{

    const [Items, setItems] = useState('');
    const [TodoItem, updateItems] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() =>{
        document.title = `you click ${num} times`
    })
    const updateInput = (event) =>
    {
        if(event.target.value !== undefined)
            setItems(event.target.value);
    }
    const addTodoItem = () =>
    {
        updateItems((oldItems)=>{
            return [...oldItems, Items]
        })
        setItems('');
    }

    const deleteTodoItem = (id) =>{
        updateItems((currentItems)=>
        {
            return currentItems.filter(x => x.key !== id);
        }
        )
    }
    return (
        <>
        <div className="container">
            <h1>Todo List Using Functional Component</h1>
            <div>
                <input
                type="text"
                placeholder="Enter Todo Item"
                value={Items}
                onChange={updateInput}
                />
                <button
                type="submit"
                onClick={addTodoItem}
                >Todo ➕
                </button>
                {
                    TodoItem.map((items, index) =>
                        {return <TodoItems
                            item={items}
                            key={index}
                            onDelete={deleteTodoItem}
                        ></TodoItems>}
                    )
                }
            </div>
            <button
            type="submit"
            onClick={() =>{
                setNum(num+1)
            }}
            >
               Click Me {num}
            </button>
        </div>
        </>
    );
}

export default Todo;