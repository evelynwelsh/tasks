import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(2);
    const [add, setAdd] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button></Button>
            <Button></Button>
        </div>
    );
}
