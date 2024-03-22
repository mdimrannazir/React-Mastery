import './App.css'
import UserContextProvier from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvier>
      <h1>Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvier>
  )
}

export default App
