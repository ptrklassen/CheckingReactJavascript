import React from "react";

import DeleteTodo from "./DeleteTodo";
import PrioritizeTodo from "./PrioritizeTodo"


export default function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map(todoListItem => 
      todoListItem.id === todo.id 
        ? {
          ...todoListItem, done: !todoListItem.done
        } 
        : todoListItem
    );
    setTodos(updatedTodos);
    }
  if (!todos.length) {
      return <p>Congratulations, your done! Take a breath, or add some new Todos!</p>;
  }
  return (
    <ul>
      {todos.map((todo) => ( 
        <li 
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? "line-through" : "" }} key={todo.id}> <PrioritizeTodo todo={todo} setTodos={setTodos} /> {todo.text} <DeleteTodo todo={todo} setTodos={setTodos} /></li>
        ))}
    </ul>
  );
}