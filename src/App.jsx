
import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

//traigo la string de 'todos' si es que los hay y los tranformo en obj
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {

  const [todos, setTodos] = useState (initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]) //renderiza cuando hay un cambio en los 'todos'

  
  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)

    setTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id){
        todo.state = !todo.state
      }
      return todo
    })

    setTodos(newArray)
  }

  const orderTodo = arrayTodos => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0
      if (a.priority === true) return -1
      if (a.priority === false) return 1
    })
  }

  return (
    <div className="contaiter mb-2">
      <h1 className='my-5'>Formularios</h1>
      <Formulario addTodo={addTodo}/>
      <Todos todos = {orderTodo(todos)} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
    </div>
  )
}

export default App