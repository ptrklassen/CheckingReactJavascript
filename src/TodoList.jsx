import React from "react";

import DeleteTodo from "./DeleteTodo";
import PrioritizeTodo from "./PrioritizeTodo"

// Basic list of all the todos

export default function TodoList({ todos, setTodos, active }) {
  let filteredTodos = [];
  switch(active) {
    case "Active":
      filteredTodos = todos.filter(todo => !todo.done);
      break;
    case "Completed":
      filteredTodos = todos.filter(todo => todo.done);
      break;
    default:
      filteredTodos = [...todos]
  }
  //helper function to toggle 'done' state
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map(todoListItem => 
      todoListItem.id === todo.id 
        ? {
          ...todoListItem, done: !todoListItem.done, dateCompleted: new Date().toDateString()
        } 
        : todoListItem
    );
    setTodos(updatedTodos);
    }
  // display encouraging message/instructions to add todos if there are none
  if (!todos.length) {
      return <p>Congratulations, your done! Take a breath, or add some new Todos!</p>;
  }
  return (
    <ul>
      {filteredTodos.map((todo) => {const dateMessage = todo.done ? `Completed on ${todo.dateCompleted}` : `Added on ${todo.dateAdded}`; return (
        <li 
          onDoubleClick={() => handleToggleTodo(todo)}
          // renders done todo with linethrough
          style={{ textDecoration: todo.done ? "line-through" : "" }} key={todo.id}> <PrioritizeTodo todo={todo} setTodos={setTodos} /> {todo.text}, {dateMessage}<DeleteTodo todo={todo} setTodos={setTodos} /></li>
        )})}
    </ul>
  );
}