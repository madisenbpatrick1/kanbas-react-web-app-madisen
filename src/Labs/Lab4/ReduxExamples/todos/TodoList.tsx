import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function TodoList() {
    // create todos array state variable
    // initialize with 2 todo objects 
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" }]);
    // create todo state variable object
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    // Event handler to add new todo
    const addTodo = (todo: any) => {
        // spread exisiting todos, append new todo, 
        const newTodos = [...todos, {
            ...todo,
            id: new Date().getTime().toString() // override id
        }];
        setTodos(newTodos); //update todos
        setTodo({ id: "-1", title: "" }); // clear the todo 
    };

    // Event handler to remove todo by their ID 
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    // Event handler to update todo by their ID
    const updateTodo = (todo: any) => {
        const newTodos = todos.map((item) =>
            (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    };
    return (
        // <div>
        //     <h2>Todo List</h2>
        //     <ul className="list-group">
        //         <li className="list-group-item">
        //             {/* For every keystroke update the todo title, but coly old values first */}
        //             <input defaultValue={todo.title}
        //                 onChange={(e) =>
        //                     setTodo({
        //                         ...todo,
        //                         title: e.target.value
        //                     })
        //                 }
        //             />
        //             {/* add todo button */}
        //             <button onClick={() => addTodo(todo)}
        //                 id="wd-add-todo-click" className="btn btn-success float-end ms-2">Add</button>
        //             {/* update todo item */}
        //             <button onClick={() => updateTodo(todo)}
        //                 id="wd-update-todo-click" className="btn btn-warning float-end">
        //                 Update </button>



        //         </li>
        //         {/* render all todos as line items, button to declare to delete todo by their ID */}
        //         {todos.map((todo) => (
        //             <li key={todo.id} className="list-group-item">
        //                 {todo.title}
        //                 <button onClick={() => deleteTodo(todo.id)}
        //                     id="wd-delete-todo-click"
        //                     className="btn btn-danger float-end ms-2">
        //                     Delete </button>
        //                 {/* button to select to edit */}
        //                 <button onClick={() => setTodo(todo)}
        //                     id="wd-set-todo-click"
        //                     className="btn btn-primary float-end">
        //                     Edit </button>
        //             </li>
        //         ))}
        //     </ul>
        //     <hr />
        // </div>
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm
                    todo={todo}
                    setTodo={setTodo}
                    addTodo={addTodo}
                    updateTodo={updateTodo} />
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        deleteTodo={deleteTodo}
                        setTodo={setTodo} />
                ))}
            </ul>
            <hr />
        </div>

    );
}
