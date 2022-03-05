import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, changeProgress] = useState<boolean>(false);
    return <div>Start Attempt</div>;
}
