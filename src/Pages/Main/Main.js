import React, { Component } from 'react';
import './Main.css';
import {Card} from 'react-bootstrap';
import CardView from '../../Components/Card/CardView';
export default class Main extends Component{
    render(){
        return(
            <div id='main'>
                <h4 style={{'textAlign':'center'}}>Hello, Mayank!</h4>
                <h5 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Here's a list of all your events</h5>
            
                <div id='event-list'>
                <CardView/>
                <CardView/>
                <CardView/>
                </div>
            </div>
        );
    }
}