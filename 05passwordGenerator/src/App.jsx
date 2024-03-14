import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charectersAllowed, setCharecterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [btnText, setBtnText] = useState("Copy")
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += "0123456789"
    if (charectersAllowed) str += "!@#$%^&*()_+-={}[]|:;'<>,.?/~`"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [length, numbersAllowed, charectersAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    setBtnText("Copied")
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    setBtnText("Copy")
    passwordGenerator()
  }, [length, numbersAllowed, charectersAllowed, passwordGenerator])


  return (
    <>
      <div className='bg-gray-700 px-10 py-16 my-12 mx-96 rounded-xl text-gray-600'>
        <div className='px-24'>
          <h1 className='text-center font-bold text-4xl text-white mb-8'>Random Passoword Generator</h1>
          <div className='flex rounded-xl overflow-hidden'>
            <input
              type="text"
              className='w-full shadow-xl font-bold text-4xl outline-none py-1 px-3'
              placeholder='Password'
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className='bg-blue-700 px-5 py-0.5 text-white font-bold outline-none'
              onClick={copyPassToClipboard}
            >{btnText}</button>
          </div>
          <div className='mt-6 font-bold text-white gap-8 flex text-xl'>
            <label>
              <input type="range"
                min={6}
                max={30}
                className='cursor-pointer h-4'
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
              />
              Length: {length}</label>

            <label className='cursor-pointer'>
              <input type="checkbox"
                defaultValue={charectersAllowed}
                className='w-6 h-4'
                onChange={() => {
                  setCharecterAllowed((prev) => !prev)
                }}
              />
              Special Charecter</label>

            <label className='cursor-pointer'>
              <input type="checkbox"
                defaultValue={numbersAllowed}
                className='w-6 h-4'
                onChange={() => {
                  setNumbersAllowed((prev) => !prev)
                }}
              />
              Numbers</label>
          </div>
        </div>


      </div>

    </>
  )
}

export default App
