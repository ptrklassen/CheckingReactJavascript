import React from "react";

import './App.css';
import AddTodo from "./AddTodo";
import TabGroup from "./TabGroup";
import TodoList from "./TodoList";

// todo object: {id: 1, text: "todo description", "done": false, "priority": 0}

export default function App() {
  const [todos, setTodos] = React.useState([])
 
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TabGroup todos={todos} setTodos={setTodos}/>
      
      <AddTodo setTodos={setTodos}/>
    </div>
  )
}
