import {
  Button,
  MenuItem,
  MenuList,
  Subtitle2,
  Tooltip,
  tokens,
} from '@fluentui/react-components'
import { ArrowLeft32Regular, ArrowRight32Regular } from '@fluentui/react-icons'
import useQuestions from '../store/useQuestions'
import useDarkMode from '../store/useDarkMode'
import Details from './Details'

export default function QuizGame() {
  const darkMode = useDarkMode((state) => state.darkMode)
  const questions = useQuestions((state) => state.questions)
  const currentQuestion = useQuestions((state) => state.currentQuestion)
  const prevQuestion = useQuestions((state) => state.prevQuestion)
  const nextQuestion = useQuestions((state) => state.nextQuestion)
  const selectAnswer = useQuestions((state) => state.selectAnswer)

  const getBackgroundColor = (index: number) => {
    const selected = questions[currentQuestion].selected

    if (selected !== undefined) {
      if (questions[currentQuestion].correct == selected && selected == index) {
        return tokens.colorStatusSuccessBackground2
      } else {
        if (selected == index) {
          return tokens.colorStatusDangerBackground2
        }
        if (questions[currentQuestion].correct == index) {
          return tokens.colorStatusSuccessBackground2
        }
      }
    }
  }

  return (
    <>
    <div id='quiz-game' className={darkMode ? 'dark' : ''}>
      <div id='controls'>
      <Tooltip positioning='before' withArrow content="Anterior" relationship="label">
        <Button
          disabled={currentQuestion <= 0}
          appearance='outline'
          size='large'
          icon={<ArrowLeft32Regular />}
          onClick={prevQuestion}
        />
        </Tooltip>
        <Subtitle2>{`${currentQuestion + 1} / ${questions.length}`}</Subtitle2>
        <Tooltip positioning='after' withArrow content="Siguiente" relationship="label">
        <Button
          disabled={currentQuestion + 1 >= questions.length}
          appearance='outline'
          size='large'
          icon={<ArrowRight32Regular />}
          onClick={nextQuestion}
        />
        </Tooltip>
      </div>
      <div
        id='question'
        style={{ backgroundColor: tokens.colorNeutralBackgroundAlpha }}
      >
        {questions[currentQuestion]?.question}
      </div>
      <MenuList id='answers'>
        {questions[currentQuestion]?.answers.map((answer, index) => {
          return (
            
            <MenuItem
                disabled={questions[currentQuestion]?.selected!==undefined}
              onClick={() => selectAnswer(index)}
              style={{ backgroundColor: getBackgroundColor(index) }}
              key={index}
            >
              {answer}
            </MenuItem>
          )
        })}
      </MenuList>
    </div>
    <Details/>
    </>
  )
}
