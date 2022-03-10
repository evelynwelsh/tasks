import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateEdit(event: ChangeEvent) {
        setEdit(event.target.checked);
    }
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    function updateStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="can-edit-check"
                label="Switch between edit modes"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <span>
                    {name} is {student ? "a student" : "not a student"}.
                </span>
            )}
        </div>
    );
}
