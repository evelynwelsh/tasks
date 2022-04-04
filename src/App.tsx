import React from "react";
import "./App.css";
import { InsertSketch } from "./quizzer/InsertSketch";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./quizzer/ShowHideTasks";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Evelyn Does CISC275</header>
            <Quizzer></Quizzer>
            <InsertSketch></InsertSketch>
            <ShowHideTasks></ShowHideTasks>
        </div>
    );
}

export default App;
