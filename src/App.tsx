import { useState } from 'react'
import './App.css'
import { Button, FluentProvider, Title1 } from '@fluentui/react-components'
import { lightTheme, darkTheme } from './utils/themes'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const mainTheme = darkMode ? darkTheme : lightTheme

  return (
    <FluentProvider theme={mainTheme}>
      <div id='main-container'>
        <nav style={{boxShadow: mainTheme.shadow2}}>
          <div></div>
          <Title1>Quiz App</Title1>
          <Button
            onClick={changeDarkMode}
            shape='circular'
            icon={<>{darkMode?' 🌞 ':' 🌝 '}</>}
          ></Button>
        </nav>
        <div></div>
      </div>
    </FluentProvider>
  )
}

export default App
