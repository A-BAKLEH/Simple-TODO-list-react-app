import React from 'react';
import Todo from "./Todo";

function Todolist({todos, setTodos, filterTodos}) {


    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} ></Todo>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;