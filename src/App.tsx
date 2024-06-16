import './App.css'
import { Button, FluentProvider, Title1 } from '@fluentui/react-components'
import QuizGame from './QuizGame'
import useDarkMode from './store/useDarkMode'
import { getTheme } from './utils/themes'

function App() {

  const darkMode = useDarkMode((state)=>state.darkMode)
  const changeDarkMode = useDarkMode((state)=>state.changeDarkMode)

  const theme = getTheme(darkMode)

  return (
    <FluentProvider theme={theme}>
      <div id='main-container'>
        <nav style={{boxShadow: theme.shadow2}}>
          <div></div>
          <Title1>Quiz App</Title1>
          <Button
            onClick={changeDarkMode}
            shape='circular'
            icon={<>{darkMode?' 🌞 ':' 🌝 '}</>}
          ></Button>
        </nav>
        <QuizGame/>
      </div>
    </FluentProvider>
  )
}

export default App
