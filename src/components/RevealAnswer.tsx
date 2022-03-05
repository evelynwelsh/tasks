import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [shown, setShown] = useState<boolean>(false);
    function showAns(): void {
        setShown(!shown);
    }
    return (
        <div>
            <Button onClick={showAns}>Reveal Answer</Button>
            {shown && <div>42</div>}
        </div>
    );
}
