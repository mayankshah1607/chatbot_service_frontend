import React, { Component } from 'react';
import './EventForm.css';
import {Form, Button} from 'react-bootstrap';

export default class EventForm extends Component{
    render(){
        return(
            <div id='event-form'>
                <h4 style={{'textAlign':'center'}}>Just answer the following questions</h4>
                <h5 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Let the ChatBot handle the rest! :)</h5>

                <div id='form-holder'>
                    <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Organization Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the event fees?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Is the event refundable?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the registration date?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What are the payment methods available?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What are the prizes?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What are the available discounts?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>How should the chatbot greet?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the event schedule?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the event date?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the event time?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the available accommodation?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Who are the speakers?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Any extra information regarding the speakers?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What is the food arrangement?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mention any location related info here.</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contact information?</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>About the organization</Form.Label>
                        <Form.Control type="text" placeholder="Your Answer" />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
            
            
            </div>
        );
    }
}