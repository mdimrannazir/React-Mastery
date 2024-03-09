import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    user: "imran",
    age: 21
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='font-bold text-3xl bg-indigo-500 text-white p-4 rounded-md mb-4'>Tailwind CSS with React Test</h1>
      <Card username="Imran" btnText="Imran Button" someObj={myObj} someArr={myArr} />
      <Card username="Shan" btnText="Shan Button" />
      <Card />
    </>
  )
}

export default App
