import React from 'react';

let inc = 0;

function Forms({setInputText, todos, setTodos, inputText, setStatus}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: inc }]);
        inc++;
        setInputText("");
    }

    return (
        <form>
            <input placeholder="Insert Todo Item..." value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name='todos' className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Forms;