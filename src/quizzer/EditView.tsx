import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
// import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuestionEditView } from "./QuestionEditView";
// import { Question } from "../interfaces/question";
// import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
// import { CheckAnswer } from "../form-components/CheckAnswer";

export function EditView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [desc, setDesc] = useState<string>(quiz.description);
    function updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
        quiz.title = event.target.value;
    }
    function updateDesc(event: React.ChangeEvent<HTMLInputElement>) {
        setDesc(event.target.value);
        quiz.description = event.target.value;
    }
    return (
        <div>
            <Row>
                <Col>
                    <h3>
                        <Form.Group controlId="formQuizTitle">
                            <Form.Label>New Title:</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={updateTitle}
                            />
                        </Form.Group>
                        : {quiz.quest.length} Questions
                    </h3>
                    <p>
                        <Form.Group controlId="formDescription">
                            <Form.Label>New Description:</Form.Label>
                            <Form.Control value={desc} onChange={updateDesc} />
                        </Form.Group>
                    </p>
                </Col>
                {quiz.quest.map((que: Question) => (
                    <div key={que.id}>
                        <QuestionEditView que={que}></QuestionEditView>
                    </div>
                ))}
            </Row>
        </div>
    );
}
