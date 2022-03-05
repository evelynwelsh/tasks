import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    return (
        <div>
            Two Dice
            <div>
                <Button onClick={() => setLeft(d6())}>Roll Left</Button>
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
            </div>
            <div>
                Left: <span data-testid="left-die">{left} </span>
                Right: <span data-testid="right-die">{right}</span>
            </div>
            <div>
                {left === right && left !== 1 && "Win!"}
                {left === right && left === 1 && "Lose!"}
            </div>
        </div>
    );
}
