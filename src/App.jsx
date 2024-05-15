
import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStateTodos = [
  {
    id: 1,
    title: 'Todo #01',
    description: 'Description #01',
    state: true,
    priority: true
  },
  {
    id: 2,
    title: 'Todo #01',
    description: 'Description #01',
    state: false,
    priority: false
  },
  {
    id: 3,
    title: 'Todo #01',
    description: 'Description #01',
    state: false,
    priority: true
  }
]

const App = () => {

  const [todos, setTodos] = useState (initialStateTodos);

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div className="contaiter mb-2">
      <h1 className='my-5'>Formularios</h1>
      <Formulario addTodo={addTodo}/>
      <Todos todos = {todos}/>
    </div>
  )
}

export default App