import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { idText } from "typescript";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    function updateAns(event: ChangeEvent) {
        setAns(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateAns} />
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
