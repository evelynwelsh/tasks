import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import quizzes from "../data/quizzes.json";
import questions from "../data/questions.json";
import { Question, QuestionType } from "../interfaces/question";
import { QuizView } from "./QuizView";
import { QuizList } from "./QuizList";
//import { QuizList } from "./QuizList";
/*const QUIZZES = quizzes.map((quiz): Quiz => [...quiz]);*/

export const QUIZZES = { ...quizzes };

export function Quizzer(): JSX.Element {
    const [quiz, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [edit, editQuiz] = useState<boolean>(false);
    function deleteQuiz(title: string) {
        setQuizzes(
            quizzes.filter((quiz: Quiz): boolean => quiz.title != title)
        );
    }
    function doEdit(): void {
        editQuiz(!edit); /*Make this actually function later*/
    }
    return (
        <div>
            <h3>The Cat Quizzer</h3>

            <QuizList
                quizzes={quiz}
                deleteQuiz={deleteQuiz}
                doEdit={doEdit}
            ></QuizList>
        </div>
    );
}
