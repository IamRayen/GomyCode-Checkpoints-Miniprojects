import { Card, Button } from "react-bootstrap";

const ListTask = ({ taskList }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
        >
            {taskList.map((x) => (
                <div>
                    <Card style={{ height:"11rem",width: "22rem", margin: "5px" }}>
                        <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                            <Card.Title>{x.name}</Card.Title>
                            <Card.Text>{x.description}</Card.Text>
                           <div style={{display:"flex", justifyContent:"space-between",}}>
                           <Button className="buttons" variant="outline-danger">Delete</Button>{' '}
                            <Button  className="buttons" variant="outline-primary">Edit</Button>{' '}

                            <Button  className="buttons"  variant="outline-success">
                                Check
                            </Button>
                            </div> 
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ListTask;
