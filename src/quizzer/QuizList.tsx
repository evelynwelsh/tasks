import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";

import { Form } from "react-bootstrap";
import { EditView } from "./EditView";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export function QuizList({
    quizzes
}: // deleteQuiz,
// doEdit
{
    quizzes: Quiz[];
    deleteQuiz: (id: string) => void;
    doEdit: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    function updateEdit(event: ChangeEvent) {
        setEdit(event.target.checked);
    }
    return (
        <Stack gap={3}>
            <Form.Check
                type="switch"
                id="can-edit-check"
                label={!edit ? "Enter Edit Mode" : "Enter Quiz Mode"}
                checked={edit}
                onChange={updateEdit}
            />
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title} className="bg-light border m-2 p-2">
                    {edit ? (
                        <EditView quiz={quiz}></EditView>
                    ) : (
                        <QuizView
                            quiz={quiz}
                            // deleteQuiz={deleteQuiz}
                            // doEdit={doEdit}
                        ></QuizView>
                    )}
                </div>
            ))}
        </Stack>
    );
}
