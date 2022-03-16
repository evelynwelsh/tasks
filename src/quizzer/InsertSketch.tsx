import React from "react";
import sketch from "../sketch.jpg";
export function InsertSketch(): JSX.Element {
    return (
        <div>
            <img
                src={sketch}
                alt="The sketch of the Quizzer app"
                width="500"
                height="400"
            ></img>
        </div>
    );
}
