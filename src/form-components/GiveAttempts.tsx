import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [add, setAdd] = useState<string>("0");
    const num = parseInt(add) || 0;
    const combo = num + attempts;
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts: {attempts}</div>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button onClick={() => setAttempts(combo)}>Gain</Button>
            <div>
                <Form.Group controlId="formAttempts">
                    <Form.Label>Number of attempts to add:</Form.Label>
                    <Form.Control
                        type="number"
                        value={add}
                        onChange={(event: ChangeEvent) =>
                            setAdd(event.target.value)
                        }
                    />
                </Form.Group>
            </div>
        </div>
    );
}
