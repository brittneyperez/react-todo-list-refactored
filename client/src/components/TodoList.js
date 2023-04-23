import React from 'react'

const TodoList = ({ listItem, index, handleToggleComplete, handleTodoItemDelete }) => {
    const todoClasses = [];
    if (listItem.complete) {
        todoClasses.push("text-decoration-line-through")
    }
    
    return (
        <div className='mb-2 d-flex justify-content-center align-items-center'>
            <input checked={listItem.complete} onChange={(e) => {handleToggleComplete(index)}} type="checkbox" className='me-5' />
            <span className={todoClasses.join(" ")}>{ listItem.text }</span>
            <button className='btn btn-danger ms-5' onClick={(e) => {handleTodoItemDelete(index)}}>Delete</button>
        </div>
    )
}

export default TodoList