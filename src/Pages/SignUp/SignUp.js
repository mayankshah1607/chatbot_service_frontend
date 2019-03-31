import React, { Component } from 'react';
import './SignUp.css';
import {Form, Button} from 'react-bootstrap';


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            Email: '',
            Password: '',
            Name: ''
        }
    }

    onSignUp = () => {
        fetch('http://localhost:5000/auth/signup',{
                method: 'post',
                headers: {'Content-type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    Name: this.state.Name,
                    Email: this.state.Email,
                    Password: this.state.Password
                })   
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.Status) {
                    alert('User created');
                    window.location.href = '/';
                }
                else {
                    alert('Invalid credentials')
                }
            })
    }

    onName = (event) => {
        this.setState({Name : event.target.value})
    }

    onPassword = (event) => {
        this.setState({Password : event.target.value})
    }

    onEmail = (event) => {
        this.setState({Email: event.target.value})
    }

    render(){
            return(
                <div id='signup'>
                    <h1 style={{'fontSize':'50px','textAlign':'center'}}>Evento</h1>
                    <h3 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Chatbot services</h3>
    
                    <div id='signup-form'>
                        <h5 style={{'fontWeight':'bold','textAlign':'center', 'color': '#686868'}}>Create a new account</h5>
                        <br/>
                        <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={this.onName} type="email" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={this.onEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.onPassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{'marginBottom':'8px'}} variant="primary" onClick={this.onSignUp}>
                            Sign Up
                        </Button>
                        <br/>
                        <a href='/'>I already have an account</a>
                        </Form>
                    </div>
    
                </div>
            );
    }
}