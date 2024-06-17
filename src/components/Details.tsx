import { Button } from "@fluentui/react-components"
import useQuestions from "../store/useQuestions"

export default function Details (){

    const questions = useQuestions(state=>state.questions)
    const resetQuestions = useQuestions(state=>state.resetQuestions)

    return (
        <>
        <div id="info">
            <div>✅ Correctas: {questions.reduce((sum, question)=>question.correct===question.selected?sum+1:sum,0)}</div>
            <div>❌ Incorretas: {questions.reduce((sum, question)=>(question.selected!==undefined && question.selected!==question.correct)?sum+1:sum,0)}</div>
            <div>❓ Sin responder: {questions.reduce((sum, question)=>(question.selected===undefined)?sum+1:sum,0)}</div>
        </div>
        {questions.some((question)=>(question.selected===undefined))?'':<Button onClick={resetQuestions}>Volver a comenzar</Button>}
        </>
    )
}