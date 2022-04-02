import React, { useState } from "react";
// import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import { CheckAnswer } from "../form-components/CheckAnswer";

export function QuestionView({ quiz }: { quiz: Quiz }): JSX.Element {
    // const [shortAns, setSA] = useState<string>("");
    //const [pointVal, setPoints] = useState<number>(0);

    const pointVal = 0;
    return (
        <div>
            {" "}
            <p>
                Total Points Earned: {pointVal}/{quiz.totpoints}
            </p>
            {quiz.quest.map((quest: Question) => (
                <>
                    <div key={quest.id} className="bg-light border m-2 p-2">
                        {quest.id}: {quest.name} ({quest.points} Point(s))
                        <div>{quest.body}</div>
                        <div>
                            {quest.type === "short_answer_question" ? (
                                <CheckAnswer
                                    expectedAnswer={quest.expected}
                                ></CheckAnswer>
                            ) : (
                                <MultipleChoiceQuestion
                                    options={quest.options}
                                    expectedAnswer={quest.expected}
                                ></MultipleChoiceQuestion>
                            )}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}
