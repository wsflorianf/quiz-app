import { create } from "zustand";
import { Question } from "../types/question";


interface QuestionsTypes{
    questions: Question[]
    currentQuestion: number
    getQuestions: ()=>void

}


const useQuestions = create<QuestionsTypes>()(()=>({
    questions: [],
    currentQuestion: 0,
    getQuestions: ()=>{

    }
}))

export default useQuestions