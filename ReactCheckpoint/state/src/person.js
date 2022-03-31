import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Person extends Component {
    render(props) {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.person.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.person.fullName}</Card.Title>
                    <Card.Text>{this.props.person.bio}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
