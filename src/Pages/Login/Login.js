import React, { Component } from 'react';
import './Login.css';
import {Form, Button} from 'react-bootstrap';

export default class Login extends Component{
    render(){
        return(
            <div id='login'>
                <h1 style={{'fontSize':'50px','textAlign':'center'}}>Evento</h1>
                <h3 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Chatbot services</h3>

                <div id='login-form'>
                    <h4>Sign into your account</h4>
                    <br/>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{'marginBottom':'8px'}} variant="primary" type="submit">
                        Login
                    </Button>
                    <br/>
                    <a href='https://google.com'>Create a new account</a>
                    </Form>
                </div>

            </div>
        );
    }
}