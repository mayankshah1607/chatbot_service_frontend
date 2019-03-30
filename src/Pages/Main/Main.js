import React, { Component } from 'react';
import './Main.css';
import CardView from '../../Components/Card/CardView';
export default class Main extends Component{
    render(){
        return(
            <div id='main'>
                <h4 style={{'textAlign':'center'}}>Hello, Mayank!</h4>
                <h5 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Here's a list of all your events</h5>
                <br/><br/>
                <h6 style={{'fontWeight':'100','textAlign':'center'}}>Alternatively, you could also <a id='add-new' onClick={() => console.log('boop')}>add a new</a> event</h6>
                <div id='event-list'>
                <CardView/>
                <CardView/>
                <CardView/>
                </div>
            </div>
        );
    }
}