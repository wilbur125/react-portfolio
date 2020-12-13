import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../../App.css';

function Project(props) {
    return (
        <CardGroup>
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="primary" href={props.ghhref}>GitHub Repo</Button>
                <br/>
                <Button variant="primary" href={props.dhref}>Project URL</Button>
            </Card.Body>
            </Card>
        </CardGroup>
    )

}

export default Project;