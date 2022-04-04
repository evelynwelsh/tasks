import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
// import { Row, Col, Container, Button, Form } from "react-bootstrap";
//import { Quiz } from "../interfaces/quiz";
// import { Question } from "../interfaces/question";
// import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
// import { CheckAnswer } from "../form-components/CheckAnswer";

export function QuestionEditView({ que }: { que: Question }): JSX.Element {
    const [name, setName] = useState<string>(que.name);
    const [points, setPoints] = useState<string>(que.points.toString());
    const [body, setBody] = useState<string>(que.body);
    const [expected, setExpected] = useState<string>(que.expected);
    //const [options, setOptions] = useState<string[]>(que.options);
    const [currOption, setCurrOption] = useState<string>(que.options[0]);
    const [published, setPublished] = useState<boolean>(que.published);
    function updatePublished() {
        setPublished(!published);
        que.published = !published;
    }
    function updateCurrOption(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrOption(event.target.value);
    }
    function updateExpected(event: React.ChangeEvent<HTMLInputElement>) {
        setExpected(event.target.value);
        que.expected = event.target.value;
    }
    function updateBody(event: React.ChangeEvent<HTMLInputElement>) {
        setBody(event.target.value);
        que.body = event.target.value;
    }
    //const realPoints = parseInt(points) || 0;
    function updatePoints(event: React.ChangeEvent<HTMLInputElement>) {
        setPoints(event.target.value);
        que.points = parseInt(event.target.value) || 0;
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        que.name = event.target.value;
    }
    return (
        <div>
            <>
                <div key={que.id} className="bg-light border m-2 p-2">
                    {que.id}:{" "}
                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-published-check"
                        label="Publish"
                        checked={published}
                        onChange={updatePublished}
                    />
                    <Form.Group controlId="formQuizName">
                        <Form.Label>New Question Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Group controlId="formQuizPoints">
                        <Form.Label>New Point Value:</Form.Label>
                        <Form.Control value={points} onChange={updatePoints} />
                    </Form.Group>{" "}
                    <div>
                        <Form.Group controlId="formQuestionBody">
                            <Form.Label>New Question Body:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={body}
                                onChange={updateBody}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionExpected">
                            <Form.Label>New Correct Answer:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={expected}
                                onChange={updateExpected}
                            />
                        </Form.Group>
                    </div>
                    {que.type === "short_answer_question" ? (
                        <span>
                            <b>
                                Change to Multiple Choice Question to input
                                answer options.
                            </b>
                        </span>
                    ) : (
                        <div>
                            Answer Options:{" "}
                            {que.options.map((opt: string) => (
                                <option key={opt} value={opt}>
                                    <Form.Group controlId="formQuizOptions">
                                        <Form.Label>Edit option:</Form.Label>
                                        <Form.Control
                                            value={currOption}
                                            onChange={updateCurrOption}
                                        />
                                    </Form.Group>
                                </option>
                            ))}
                        </div>
                    )}
                </div>
            </>
        </div>
    );
}
