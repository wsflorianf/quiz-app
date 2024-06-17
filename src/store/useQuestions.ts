import { create } from "zustand";
import { Question } from "../types/question";


interface QuestionsTypes{
    questions: Question[]
    currentQuestion: number
    getQuestions:  ()=>void
    prevQuestion: ()=>void
    nextQuestion: ()=>void
    selectAnswer: (answer: number)=>void
    resetQuestions: ()=>void

}


const useQuestions = create<QuestionsTypes>()((set)=>({
    questions: [],
    currentQuestion: 0,
    getQuestions: async ()=>{
        const myQuestions: Question[] = await fetch('http://localhost:5173/src/utils/questions.json').then(response => response.json())
        set({questions: myQuestions})
    },
    prevQuestion: ()=>set((state)=>{if(state.currentQuestion>0){return {currentQuestion: state.currentQuestion-1}} else {return {}}}),
    nextQuestion: ()=>set((state)=>{if(state.currentQuestion<state.questions.length-1){return {currentQuestion: state.currentQuestion+1}} else {return {}}}),
    selectAnswer: (answer)=>set((state)=>{
        const newQuestions = [...state.questions]
        newQuestions[state.currentQuestion].selected = answer
        
        return {questions: newQuestions}
    }),
    resetQuestions: ()=>set({questions: []})
}))

export default useQuestions