export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
}) {
    return (
        <li className="list-group-item">
            <button onClick={() => addTodo(todo)}
                id="wd-add-todo-click"
                className="btn btn-success float-end ms-2">
                Add
            </button>
            <button onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"
                className="btn btn-warning float-end">
                Update
            </button>
            <input defaultValue={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </li>
    );
}
