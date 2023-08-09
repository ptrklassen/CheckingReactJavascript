import React from "react";
import './App.css';


export default function App() {
  const [todos, setTodos] = React.useState([
  { id: 1, text: "Take a shower", done: true },
  { id: 2, text: "Go to Costco", done: false },
  { id: 3, text: "By a wheelbarrow tire", done: false }
])
 
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <ToDoList todos={todos} setTodos={setTodos}/>
      <AddToDo setTodos={setTodos}/>
    </div>
  )
}


function ToDoList({ todos, setTodos }) {
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
  return (
    <ul>
      {todos.map((todo) => ( 
        <li 
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? "line-through" : "" }} key={todo.id}>{todo.text}</li>
        ))}
    </ul>
  );
}

function AddToDo({ setTodos }) {
const inputRef = React.useRef();
  
  function handleAddToDo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false
    };
    setTodos(previousTodos => {
      return previousTodos.concat(todo);
    });
    inputRef.current.value = "";
  }
  
  return (
    <form onSubmit={ handleAddToDo }>
      <input name="addTodo" placeholder="Add ToDo" ref={ inputRef }/>
      <button type="submit">Add</button>
    </form>
  );
}
