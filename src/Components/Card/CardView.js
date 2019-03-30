import React, { Component } from 'react';
import './CardView.css';
import {Card} from 'react-bootstrap';

export default class CardView extends Component{
    constructor(props){
        super(props)
    }
    render(){

        const {eventName,orgName, desc} = this.props;
        return(
            <div className='cardview'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link style={{'color':'red'}} href="#">Delete</Card.Link>
                </Card.Body>
                </Card>
            </div>
        );
    }
}