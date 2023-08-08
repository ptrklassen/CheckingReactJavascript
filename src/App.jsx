import React from "react";
import './App.css';


export default function App() {
  const [todos, setTodos] = React.useState([
  { id: 1, text: "Take a shower", done: false },
  { id: 2, text: "Go to Costco", done: false },
  { id: 3, text: "By a wheelbarrow tire", done: false }
])
 
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <ToDoList todos={todos}/>
      {/* <AddToDo setTodos={setTodos}/> */}
    </div>
  )
}


function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => 
        <li key={todo.id}>{todo.text}</li>
        )}
    </ul>
  )  
}


