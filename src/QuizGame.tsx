import {  MenuList } from "@fluentui/react-components";
import { getTheme } from "./utils/themes";
import useDarkMode from "./store/useDarkMode";
import useQuestions from "./store/useQuestions";

export default function QuizGame(){

    const darkMode = useDarkMode(state=>state.darkMode)
    const theme = getTheme(darkMode)

    const question = useQuestions(state=>state.questions)

    return (
        <div id="quiz-game">
            <div id="controls">a</div>
            <div id="question"></div>
            <MenuList>
                
            </MenuList>
        </div>
    )
}