import { Card } from "react-bootstrap";

const Comm = ({X}) => {
    return (
        <Card style={{ width: '35rem' }}>
<Card.Body>
    <Card.Title>{X.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{X.email}</Card.Subtitle>
    <Card.Text>
        {X.body}
    </Card.Text>
</Card.Body>
        </Card>
    );
}

export default Comm;