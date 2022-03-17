import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import quizzes from "../data/quizzes.json";
import questions from "../data/questions.json";
import { Question, QuestionType } from "../interfaces/question";
/*const QUIZZES = quizzes.map((quiz): Quiz => [...quiz]);*/

const QUIZZES = { ...quizzes };

export function Quizzer(): JSX.Element {
    const [quiz, setQuizzes] = useState<Quiz[]>(QUIZZES);
    return (
        <div>
            <h3>The Cat Quizzer</h3>
            <div>{quiz[0].title}</div>
        </div>
    );
}
