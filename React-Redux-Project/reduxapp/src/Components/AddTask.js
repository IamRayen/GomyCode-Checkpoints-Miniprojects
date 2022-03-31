import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddToDo = ({taskList,addTask}) => {
    const initialValues = { name: "", description: "", date: "" };

    const [values, setValues] = useState(initialValues);
    const resetInputs =()=>{
        setValues(initialValues)
    }
    console.log(values)
    const handleClick = () =>{
        addTask(values);
        resetInputs();
        console.log(taskList)
    }

    return (
        <Form>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
            >
                <Form.Label>Add a ToDo Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="TaskName"
                    value={values.name}
                    onChange={(e) => setValues({...values,name:e.target.value})}
                />
            </Form.Group>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Add a Due Date</Form.Label>
                <Form.Control
                    placeholder="Date"
                    rows={3}
                    value={values.date}
                    onChange={(e) =>setValues({...values,date:e.target.value})}
                />
            </Form.Group>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Add a ToDo Description</Form.Label>
                <Form.Control
                    placeholder="TaskDescription"
                    as="textarea"
                    rows={3}
                    value={values.description}
                    onChange={(e) =>setValues({...values,description:e.target.value})}
                />
            </Form.Group>

            <Button
                style={{ position: "relative", left: "45%" }}
                variant="secondary"
                onClick={()=> 
                {handleClick()}}
            >
                Add
            </Button>
        </Form>
    );
};

export default AddToDo;
