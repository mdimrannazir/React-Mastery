import Imran from "./imran"




function App() {
  const username = 'Md. Imran Nazir'
  return (
    <>
      <Imran />
      <p>Lorem ipsum dolor sit amet. {username}</p>
      {/* {username} is evaluated expression */}
    </>
  )
}

export default App
