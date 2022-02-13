import React from "react";
import "./App.css";
import col from "./col.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript with Evelyn Welsh
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!!
            </p>
            <img
                src={col}
                width="218"
                height="224"
                alt="A picture of me and my cat Colby."
            />
        </div>
    );
}

export default App;
