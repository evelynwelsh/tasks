import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import quizzes from "../data/quizzes.json";
// import questions from "../data/questions.json";
//import { Question } from "../interfaces/question";
// import { QuizView } from "./QuizView";
import { QuizList } from "./QuizList";

//import { QuizList } from "./QuizList";
// const QUIZINIT = quizzes.map(
//     (quiz): Quiz => ({
//         ...quiz,
//         totpoints: quiz.quest.reduce(
//             (sum: number, curr: Question) => sum + curr.points,
//             0
//         )
//     })
// );
//const QUIZZES = QUIZINIT as Quiz[];
const QUIZZES = quizzes as Quiz[];
// export const QUIZZES = quizzes.map((quiz: Quiz) => {
//   return {
//      ...quiz,
//     quest: quiz.quest.map(question => {
//         ...question,
//         type: question.type as Question
//     }
//   }
// });

export function Quizzer(): JSX.Element {
    const [quiz, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [edit, editQuiz] = useState<boolean>(false);

    function deleteQuiz(title: string) {
        setQuizzes(quiz.filter((quizz: Quiz): boolean => quizz.title != title));
    }
    function doEdit(): void {
        editQuiz(!edit); /*Make this actually function later*/
    }
    return (
        <div>
            <h3>Quizzer with Ev</h3>

            <QuizList
                quizzes={quiz}
                deleteQuiz={deleteQuiz}
                doEdit={doEdit}
            ></QuizList>
            <div>
                <ul>
                    Completed Features
                    <li>sketch</li>
                    <li>Can see question list and info</li>
                    <li>Can click to view questions and their info</li>
                    <li>Two types of questions</li>
                    <li>Can answer questions </li>
                    <li>Can see when answer is correct</li>
                    <li>Can edit quiz fields</li>
                    <li>
                        Can edit MOST question fields (mulitple choice answer
                        option editing does not function at the current
                        moment)-some you can edit but they do not change
                        correctly (like publishing)
                    </li>
                    <li>
                        UNFINISHED: I simply cannot get the point totals to work
                    </li>
                </ul>
            </div>
        </div>
    );
}
