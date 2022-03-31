import { Card } from "react-bootstrap";
import { Button} from 'react-bootstrap';




const Video = ({X}) => {
    return (  
    <Card style={{ width: '18rem' }}>
        <iframe variant="top" src={X.url} />
        <Card.Body>
            <Card.Title>
                {X.title}
            </Card.Title>
            <Card.Text>
                {X.views}
            </Card.Text>
            <Button variant="outline-primary">Watch now</Button>
        </Card.Body>
    </Card>
    );
}
export default Video;
