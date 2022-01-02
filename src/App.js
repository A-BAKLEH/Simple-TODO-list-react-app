import React, { useState, useEffect } from "react";
import './App.css';
import Forms from "./component/Forms";
import Todolist from "./component/todolist";
import todo from "./component/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter(el => el.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(el => el.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }

  useEffect(getLocalTodos,[]);
  useEffect(() => {filterHandler(); saveLocalTodos();},[todos,status]);

  return (
    <div className="App">
    <header>
      <h2>My Todo List</h2>
    </header>
      <Forms
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}></Forms>
      <Todolist filterTodos={filteredTodos} todos={todos} setTodos={setTodos}></Todolist>
    </div>
  );
}

export default App;
