import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [typeQuestion, changeTypeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function doChange(): void {
        changeTypeQuestion(
            typeQuestion === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={doChange}>Change Type</Button>
            {typeQuestion === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
