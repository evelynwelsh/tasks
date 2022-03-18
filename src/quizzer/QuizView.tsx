import { Quiz } from "../interfaces/quiz";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            {/* <strong>All Quizzes</strong> */}
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
                    <p>Total Points Earned: figure out later</p>
                </Col>
            </Row>
        </Container>
    );
}
