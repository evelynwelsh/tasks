import React from "react";
import { Stack } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";

export function QuizList({
    quizzes
}: // deleteQuiz,
// doEdit
{
    quizzes: Quiz[];
    deleteQuiz: (id: string) => void;
    doEdit: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quiz}
                        // deleteQuiz={deleteQuiz}
                        // doEdit={doEdit}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
