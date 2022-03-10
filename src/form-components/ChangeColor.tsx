import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("white");
    /* const colorVals: Record<string, string> = {
        red: "#FF6961",
        pink: "#FFD1DC",
        yellow: "#FDFD96",
        blue: "#80E2FF",
        green: "#77DD77",
        purple: "#B19CD8",
        orange: "#FFB347",
        white: "#FFFFFF"
    };Very sad it wouldn't let me use these, they were prettier*/
    const colors = [
        "red",
        "pink",
        "yellow",
        "blue",
        "green",
        "purple",
        "orange",
        "white"
    ];
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col: string) => (
                <Form.Check
                    key={col}
                    inline
                    type="radio"
                    name="coloring"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="response-color"
                    label={col}
                    value={col}
                    checked={color === col}
                    style={{
                        backgroundColor: col
                    }}
                />
            ))}
            <div>
                <span>You have chosen </span>
                <span
                    style={{
                        backgroundColor: color
                    }}
                    data-testid="colored-box"
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
