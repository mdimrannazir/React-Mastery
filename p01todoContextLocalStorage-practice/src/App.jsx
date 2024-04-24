import { useState } from 'react'

import './App.css'
import TodoFrom from './components/TodoFrom'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='bg-slate-900 min-h-screen'>
        <div className='py-10'>
          <h1 className='text-white font-bold text-3xl text-center'>Manage Todos</h1>
          <TodoFrom />
          {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
))}

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
