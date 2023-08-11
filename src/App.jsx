import React from "react";
import './App.css';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


export default function App() {
  const [todos, setTodos] = React.useState([])
 
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <TodoList todos={todos} setTodos={setTodos}/>
      <AddTodo setTodos={setTodos}/>
    </div>
  )
}
