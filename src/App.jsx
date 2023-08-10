import React from "react";
import './App.css';


export default function App() {
  const [todos, setTodos] = React.useState([
  { id: 1, text: "Take a shower", done: true, priority: 2 },
  { id: 2, text: "Go to Costco", done: false, priority: 4 },
  { id: 3, text: "By a wheelbarrow wheel", done: false, priority: 3 }
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
  if (!todos.length) {
      return <p>Congratulations, your done!</p>;
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

function PrioritizeTodo({ todo, setTodos }) {
  function handleChangePriority(event) {
    event.preventDefault();
    const priorityValue = event.target.value;
    setTodos((prevTodos) => {
        return prevTodos.map(todoListItem => 
      todoListItem.id === todo.id 
        ? {
          ...todoListItem, priority: priorityValue
        } 
        : todoListItem
    );
      })
  }
  return (
    <select name="priority" style={{ marginRight: 5, width: 90 }} value={todo.priority} onChange={ handleChangePriority }>
      <option value="">Priority</option>
      <option value="1">Frog</option>
      <option value="2">Today</option>
      <option value="3">This Week</option>
      <option value="4">This Month</option>
      <option value="5">Future</option>
    </select>
  )
}


function DeleteTodo({ todo, setTodos }) {
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
      role="button"
      style={{ marginLeft: 10, cursor: "pointer", border: "none", backgroundColor: "white" }}
      >{"\u274C"}</button>
  )
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
      <button type="submit" style={{marginLeft: 5}}>Add</button>
    </form>
  );
}
