import React from "react";

export default function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id)
      })
    }
  }
  return (
    <button 
      onClick={handleDeleteTodo}
      style={{ marginLeft: 10, cursor: "pointer", border: "none", backgroundColor: "white" }}
      >{"\u274C"}</button>
  )
}