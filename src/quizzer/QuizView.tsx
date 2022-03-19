import { Quiz } from "../interfaces/quiz";
import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { QuestionView } from "./QuestionView";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [viewQ, setView] = useState<boolean>(false);
    // function changeView(event: ChangeEvent) {
    //     setView(event.target.checked);
    // }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>
                        {quiz.title}: {quiz.quest.length} Questions
                    </h3>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Total Points Possible: {quiz.totpoints}</p>
                </Col>
            </Row>
            <Button onClick={() => setView(!viewQ)}>
                {viewQ ? "Hide Questions" : "View Questions"}
            </Button>
            {viewQ ? <QuestionView quiz={quiz}></QuestionView> : "bye"}
        </Container>
    );
}
