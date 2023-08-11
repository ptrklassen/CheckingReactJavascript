import React from "react";

export default function AddTodo({ setTodos }) {
const inputRef = React.useRef();  
  function handleAddToDo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const dateAdded = new Date().toDateString();
    const todo = {
      id: Math.random(),
      text,
      done: false,
      dateAdded,
    };
    setTodos(previousTodos => {
      return previousTodos.concat(todo);
    });
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={ handleAddToDo }>
      <input name="addTodo" placeholder="Add ToDo" ref={ inputRef }/>
      <button type="submit" style={{marginLeft: 5}}>Add</button>
    </form>
  );
}