import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem(todo: any) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            {/* Invoke delete todo with ID */}
            <button onClick={() => dispatch(deleteTodo(todo.id)) }
                id="wd-delete-todo-click" className="btn btn-danger float-end ms-2"> Delete </button>
            {/* invoke select todo */}
            <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"
                className="btn btn-primary float-end">
                     Edit </button>
            {todo.title}
        </li>);
}

