import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    // // create todos array state variable
    // // initialize with 2 todo objects 
    // const [todos, setTodos] = useState([
    //     { id: "1", title: "Learn React" },
    //     { id: "2", title: "Learn Node" }]);
    // // create todo state variable object
    // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    // // Event handler to add new todo
    // const addTodo = (todo: any) => {
    //     // spread exisiting todos, append new todo, 
    //     const newTodos = [...todos, {
    //         ...todo,
    //         id: new Date().getTime().toString() // override id
    //     }];
    //     setTodos(newTodos); //update todos
    //     setTodo({ id: "-1", title: "" }); // clear the todo 
    // };

    // // Event handler to remove todo by their ID 
    // const deleteTodo = (id: string) => {
    //     const newTodos = todos.filter((todo) => todo.id !== id);
    //     setTodos(newTodos);
    // };
    // // Event handler to update todo by their ID
    // const updateTodo = (todo: any) => {
    //     const newTodos = todos.map((item) =>
    //         (item.id === todo.id ? todo : item));
    //     setTodos(newTodos);
    //     setTodo({ id: "-1", title: "" });
    // };
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}

            </ul>
            <hr />
        </div>

    );
}
