import Todo from "./Todo"

const Todos = ({ todos }) => {
    return (
        <div className="container mt-2">
            <h2 className="text-center mt-2">Todos</h2>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos