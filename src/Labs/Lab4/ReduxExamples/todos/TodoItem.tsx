export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string }; // todo to render
    deleteTodo: (id: string) => void; // event handler to remove
    setTodo: (todo: { id: string; title: string }) => void; // event handler to select
}) {
    return (
        <li key={todo.id} className="list-group-item">
            {/* Invoke delete todo with ID */}
            <button onClick={() => deleteTodo(todo.id) }
                id="wd-delete-todo-click" className="btn btn-danger float-end ms-2"> Delete </button>
            {/* invoke select todo */}
            <button onClick={() => setTodo(todo)}
                id="wd-set-todo-click"
                className="btn btn-primary float-end">
                     Edit </button>
            {todo.title}
        </li>);
}

