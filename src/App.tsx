import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import col from "./col.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Evelyn Welsh Types Things for CISC275
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>Here is a list of my cats:</h1>
                        <ul>
                            <li>Kitty (age approx. 11)</li>
                            <li>Colby (age 4)</li>
                            <li>I only have 2 cats :/</li>
                        </ul>
                        <p> Now look at this button underneath this.</p>

                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>

                        <p>Here is a random rectangle too</p>
                        <div
                            style={{
                                width: "150px",
                                height: "25px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src={col}
                            width="218"
                            height="224"
                            alt="A picture of me and my cat Colby."
                        />
                        <p> That is Colby in the picture.</p>
                        <p>Here is another random rectangle</p>
                        <div
                            style={{
                                width: "150px",
                                height: "25px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
