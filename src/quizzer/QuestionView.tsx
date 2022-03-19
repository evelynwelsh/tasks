import React, { useState } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";

export function QuestionView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [shortAns, setSA] = useState<string>("");

    return (
        <div>
            {" "}
            {quiz.quest.map((quest: Question) => (
                <>
                    <div key={quest.id} className="bg-light border m-2 p-2">
                        {quest.id}: {quest.name}
                        <div>{quest.body}</div>
                        <div>
                            {quest.type === "short_answer_question" ? (
                                <Form.Group controlId="formAnswer">
                                    <Form.Label>Type Answer:</Form.Label>
                                    <Form.Control
                                        value={shortAns}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => setSA(event.target.value)}
                                    />
                                </Form.Group>
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
