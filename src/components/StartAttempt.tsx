import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, changeProgress] = useState<boolean>(false);
    const [attempts, changeAttempts] = useState<number>(4);
    return (
        <div>
            <Button
                onClick={() => {
                    changeAttempts(attempts - 1);
                    changeProgress(true);
                }}
                disabled={attempts <= 0 || inProgress}
            >
                Start Quiz: {attempts} attempts left
            </Button>
            <Button
                onClick={() => changeProgress(false)}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => changeAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
