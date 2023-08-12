import './App.css';
import React from "react";
import TodoList from "./TodoList"
import { useState } from "react";

const types = ["All", "Active", "Completed"];

export default function TabGroup({ todos, setTodos }) {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div style={{ display: "flex" }}>
      {types.map(type => (
        <button 
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
          className={active === type ? "tab active" : "tab"}
          >
          {type}
        </button>
      ))}      
      </div>
      <TodoList todos={todos} setTodos={setTodos} active={active}/>
    </>
  )
} 