import React, { Component } from 'react';
import './Login.css';
import {Form, Button} from 'react-bootstrap';
import Main from '../Main/Main';
import cookie from 'react-cookies';

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            Email: '',
            Password: '',
            Name: '',
            Events: [],
            success: false
        }
    }
    onLogin = () => {

        if (this.state.Password.length > 0 && this.state.Email.length > 0){

            fetch('http://localhost:5000/auth/login',{
                method: 'post',
                headers: {'Content-type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    Email: this.state.Email,
                    Password: this.state.Password
                })   
            })
            .then(response => response.json())
            .then(data => {
                if (data.Status) {
                    this.setState({success: true,Name: data.data.Name,Events: data.data.Events})
                }
                else {
                    alert('Invalid credentials')
                }
            })
        }
        else {
            alert('Enter all credentials')
        }

    }

    onPassword = (event) => {
        this.setState({Password : event.target.value})
    }

    onEmail = (event) => {
        this.setState({Email: event.target.value})
    }


    render(){

        if (this.state.success) {
            return(<Main Events={this.state.Events} Name={this.state.Name} Email={this.state.Email}/>);
            
        }
        else {

            return(
                <div id='login'>
                    <h1 style={{'fontSize':'50px','textAlign':'center'}}>Evento</h1>
                    <h3 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Chatbot services</h3>
    
                    <div id='login-form'>
                        <h5 style={{'fontWeight':'bold','textAlign':'center', 'color': '#686868'}}>Sign into your account</h5>
                        <br/>
                        <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={this.onEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.onPassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{'marginBottom':'8px'}} variant="primary" onClick={this.onLogin}>
                            Login
                        </Button>
                        <br/>
                        <a href='/signup'>Create a new account</a>
                        </Form>
                    </div>
    
                </div>
            );
        }
    }
}