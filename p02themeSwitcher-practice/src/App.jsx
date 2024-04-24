import { useState, useEffect } from 'react'
import {ThemeProvider} from './contexts/Theme'

import Card from './components/Card'
import CardBtn from './components/CardBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  
  const darkMode = () => {
    setThemeMode('dark')
  }

  const lightMode = () => {
    setThemeMode('light')
  }
  

  useEffect( () => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <Card />
      <CardBtn />
    </ThemeProvider>
  )
}

export default App