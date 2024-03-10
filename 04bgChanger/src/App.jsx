import { useState } from "react"

function App() {
  const [color, setColor] = useState('indigo')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-2 px-2">
        <h1 className="justify-center flex text-3xl font-bold flex bottom-16"
          style={{ color: "white" }}
        >Choose any color</h1>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-xl">

          <button
            className="outline-none px-4 py-1 rounded-full my-1 text-white shadow-lg font-bold text-xl"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}>Red</button>

          <button
            className="outline-none px-4 py-2 rounded-full my-1 text-white shadow-lg  font-bold text-xl"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}>Green</button>

          <button
            className="outline-none px-4 py-2 rounded-full my-1 text-white shadow-lg  font-bold text-xl"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}>Blue</button>

          <button
            className="outline-none px-4 py-2 rounded-full my-1 text-white shadow-lg  font-bold text-xl"
            style={{ backgroundColor: 'maroon' }}
            onClick={() => setColor('maroon')}>Maroon</button>

          <button
            className="outline-none px-4 py-2 rounded-full my-1 text-white shadow-lg  font-bold text-xl"
            style={{ backgroundColor: 'magenta' }}
            onClick={() => setColor('magenta')}>Magenta</button>

          <button
            className="outline-none px-4 py-2 rounded-full my-1 text-white shadow-lg  font-bold text-xl"
            style={{ backgroundColor: 'crimson' }}
            onClick={() => setColor('crimson')}>Crimson</button>
        </div>
      </div>
    </div>
  )
}

export default App
