import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1)
  const [msg, setMsg] = useState()

  const addValue = () => {
    if (counter <= 4) {
      setMsg()
      setCounter(counter + 1)
      console.log("Clicked", counter)
    }
    else {
      setMsg('& can not go up')
    }
  }

  const rmvValue = () => {
    if (counter >= 1) {
      setMsg()
      setCounter(counter - 1)
      console.log("Clicked", counter)
    }
    else {
      setMsg('& can not go down')
    }

  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count is {counter} {msg}</h2>
      <button
        onClick={addValue}
      >Add Count</button>
      <button
        onClick={rmvValue}
      >Remove Count</button>
    </>
  )
}

export default App
