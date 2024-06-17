import { Button, tokens } from '@fluentui/react-components'
import useQuestions from '../store/useQuestions'
import {
  CheckmarkSquare24Filled,
  DismissSquare24Filled,
  QuestionCircle24Filled,
} from '@fluentui/react-icons'

export default function Details() {
  const questions = useQuestions((state) => state.questions)
  const resetQuestions = useQuestions((state) => state.resetQuestions)

  return (
    <>
      <div id='info'>
        <div>
          <CheckmarkSquare24Filled color={tokens.colorStatusSuccessBackground3} /> Correctas:{' '}
          {questions.reduce(
            (sum, question) =>
              question.correct === question.selected ? sum + 1 : sum,
            0
          )}
        </div>
        <div>
          <DismissSquare24Filled color={tokens.colorStatusDangerBackground3}/> Incorretas:{' '}
          {questions.reduce(
            (sum, question) =>
              question.selected !== undefined &&
              question.selected !== question.correct
                ? sum + 1
                : sum,
            0
          )}
        </div>
        <div>
          <QuestionCircle24Filled color={tokens.colorPaletteRoyalBlueBorderActive}/> Sin responder:{' '}
          {questions.reduce(
            (sum, question) =>
              question.selected === undefined ? sum + 1 : sum,
            0
          )}
        </div>
      </div>
      {questions.some((question) => question.selected === undefined) ? (
        ''
      ) : (
        <Button onClick={resetQuestions}>Volver a comenzar</Button>
      )}
    </>
  )
}
