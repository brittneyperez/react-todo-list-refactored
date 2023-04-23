import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  
  const [ newTodo, setNewTodo ] = useState("");
  const [ todoList, setTodoList ] = useState([]);
  
  const changeTextInputHandler = (e) => {
    setNewTodo(e.target.value);
  }
  
  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    
    const todoItemContent = {
      text: newTodo,
      complete: false
    }
    
    setTodoList([...todoList, todoItemContent]);
    setNewTodo("");
  }
  
  const handleToggleComplete = (idx) => {
    const updatedTodoList = todoList.map((todoItem, i) => {
      if (idx === i) {
        todoItem.complete = !todoItem.complete;
      }
      return todoItem;
    });
    setTodoList(updatedTodoList);
  }
  
  const handleTodoItemDelete = (delIdx) => {
    const filteredTodoItems = todoList.filter((_todoItem, i) => {
      return i !== delIdx
    });
    setTodoList(filteredTodoItems);
  }
  
  return (
    <div className="App">
      <div className="container">
        <h2 className='my-4'>Core Assignment #10: Todo List (Simple Edition)</h2>
        
        <form onSubmit={(e) => { handleNewTodoSubmit(e) }} className='d-flex col-4 offset-4 my-4'>
          <input type="text" onChange={ changeTextInputHandler } value={ newTodo } placeholder='Enter your task'
          className='mx-auto form-control' style={{width:'250px'}} />
          <div>
            <button className="btn btn-info ms-1">Add</button>
          </div>
        </form>
        <hr />
        
        <h2>Todo List</h2>
        {todoList.map((todoItem, i) => {
          return <TodoList
            key={i}
            index={i}
            listItem={todoItem}
            handleToggleComplete={handleToggleComplete}
            handleTodoItemDelete={handleTodoItemDelete}
          />
        })}
      </div>
      
    </div>
  );
}

export default App;
