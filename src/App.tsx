import './App.css'
import { Button, FluentProvider, Title1 } from '@fluentui/react-components'
import QuizGame from './components/QuizGame'
import useDarkMode from './store/useDarkMode'
import { getTheme } from './utils/themes'
import useQuestions from './store/useQuestions'

function App() {

  const darkMode = useDarkMode((state)=>state.darkMode)
  const changeDarkMode = useDarkMode((state)=>state.changeDarkMode)

  const questions = useQuestions(state=>state.questions)
  const getQuestions = useQuestions(state=>state.getQuestions)

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
        <main>
        {questions.length==0?<Button onClick={()=>getQuestions()} appearance='primary' size='large' style={{marginTop: -140}}>Comenzar</Button>:<QuizGame/>}
        </main>
      </div>
    </FluentProvider>
  )
}

export default App
