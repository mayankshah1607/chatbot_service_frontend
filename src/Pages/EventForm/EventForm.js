import React, { Component } from 'react';
import './EventForm.css';
import {Form, Button, InputGroup} from 'react-bootstrap';
import tick from '../../tick.png';

function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }

export default class EventForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            EventName: '',
            Organization : String,
            Desc: '',
            get_event_fees: '',
            is_refundable: '',
            get_registration_date: '',
            get_payment_method: '',
            get_prizes: '',
            get_discounts: '',
            greet: '',
            show_schedule: '',
            get_event_date: '',
            get_event_time : '',
            show_accomodation: '',
            show_speakers: '',
            speaker_details_extra: '',
            show_food_arrangements: '',
            get_distance: 'Maybe check google maps?',
            get_location: 'Maybe check google maps?',
            show_contact_info: '',
            about_chatbot: '',
            success: false,
            apiKey: ''
        }
    }

    onCopy = () => {
        copyStringToClipboard(this.state.apiKey);
    }
    

    onName = (event) => {
        this.setState({EventName: event.target.value})
    }

    onOrg = (event) => {
        this.setState({Organization: event.target.value})
    }

    onDesc = (event) => {
        this.setState({Desc: event.target.value})
    }

    onFees = (event) => {
        this.setState({get_event_fees: event.target.value})
    }

    onRefund = (event) => {
        this.setState({is_refundable: event.target.value})
    }

    onRegDate = (event) => {
        this.setState({get_registration_date: event.target.value})
    }

    onPayment = (event) => {
        this.setState({get_payment_method: event.target.value})
    }

    onPrize = (event) => {
        this.setState({get_prizes: event.target.value})
    }

    onDisc = (event) => {
        this.setState({get_discounts: event.target.value})
    }

    onGreet = (event) => {
        this.setState({greet: event.target.value})
    }

    onSchedule = (event) => {
        this.setState({show_schedule: event.target.value})
    }

    onEDate = (event) => {
        this.setState({get_event_date: event.target.value})
    }

    onETime = (event) => {
        this.setState({get_event_time: event.target.value})
    }

    onAcco = (event) => {
        this.setState({show_accomodation: event.target.value})
    }

    onSpeak = (event) => {
        this.setState({show_speakers: event.target.value})
    }

    onSpeakE = (event) => {
        this.setState({speaker_details_extra: event.target.value})
    }

    onFood = (event) => {
        this.setState({show_food_arrangements: event.target.value})
    }
    
    onContact = (event) => {
        this.setState({show_contact_info: event.target.value})
    }
    
    onAbout = (event) => {
        this.setState({about_chatbot: event.target.value})
    }

    onSubmit = () => {
        const obj = this.state;
        delete obj.success;
        delete obj.apiKey;
        fetch('http://localhost:5000/data/addevent',{
            method: 'post',
            headers: {'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data => {
            if (data.Status) {
                this.setState({success: true, apiKey: data.data._id})
            }

            else {
                if (data.Message === "Not found"){
                    window.location.href='/'
                }
            }
        })
    }




    render(){
        if (this.state.success) {
            return(
                <div id='api-success'>
                    <img id='tick' src={tick}></img>
                    <h3>Event has been added successfully</h3>
                    <Form.Group id='api-field'>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend"><strong>API Key</strong></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control contentEditable={false}
                        type="text"
                        placeholder="Your API Key"
                        value={this.state.apiKey}
                        />
                    </InputGroup>
                    </Form.Group>
                    <p id='copy' onClick={this.onCopy}>Copy to clipboard</p>
                    <p className='back-home' onClick={() => {window.location.href ='/'}}>Back to home</p>
                </div>
            );
        }

        else {

            return(
                <div id='event-form'>
                    <h4 style={{'textAlign':'center'}}>Enter the following details</h4>
                    <h6 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Let the ChatBot handle the rest! :)</h6>
                    <br/><br/><br/>
                    <h6 style={{'fontWeight':'100','textAlign':'center'}}>Note that your answers will be your chatbot's replies</h6>
    
                    <div id='form-holder'>
                        <Form>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control onChange={this.onName} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control onChange={this.onOrg} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control onChange={this.onDesc} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event fees</Form.Label>
                            <Form.Control onChange={this.onFees} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Refund policy</Form.Label>
                            <Form.Control onChange={this.onRefund} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Registration Date</Form.Label>
                            <Form.Control onChange={this.onRegDate} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Payment methods</Form.Label>
                            <Form.Control onChange={this.onPayment} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prizes</Form.Label>
                            <Form.Control onChange={this.onPrize} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Discounts</Form.Label>
                            <Form.Control onChange={this.onDisc} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Greet Message</Form.Label>
                            <Form.Control onChange={this.onGreet} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event Schedule</Form.Label>
                            <Form.Control onChange={this.onSchedule} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event date</Form.Label>
                            <Form.Control onChange={this.onEDate} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Event time</Form.Label>
                            <Form.Control onChange={this.onETime} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Available Accommodation</Form.Label>
                            <Form.Control onChange={this.onAcco} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Guest speakers/ mentors</Form.Label>
                            <Form.Control onChange={this.onSpeak} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Any extra information regarding the speakers?</Form.Label>
                            <Form.Control onChange={this.onSpeakE} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Food arrangemenets</Form.Label>
                            <Form.Control onChange={this.onFood} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Mention any location related info here.</Form.Label>
                            <Form.Control type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Contact information</Form.Label>
                            <Form.Control onChange={this.onContact} type="text" placeholder="Your Answer" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>About the organization</Form.Label>
                            <Form.Control onChange={this.onAbout} type="text" placeholder="Your Answer" />
                        </Form.Group>
                        <br/>
                        <Button onClick={this.onSubmit} variant="primary">
                            Submit
                        </Button>
                        <br/><br/>
                        <p className='back-home' onClick={() => {window.location.href ='/'}}>Back to home</p>
                        </Form>
                    </div>
                
                
                </div>
            );
        }
    }
}