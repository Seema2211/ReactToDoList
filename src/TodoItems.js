import React from 'react'

const TodoItems = (props) =>{
    return(<>
        <li>{props.item}
        <button
        className="btn-delete"
        type="submit"
        value="👎"
        onClick={()=>{
            props.onDelete(props.key)
        }}
        >Delete 👎
        </button>
        </li>
    </>);
}

export default TodoItems;