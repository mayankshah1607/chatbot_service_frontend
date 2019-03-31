import React, { Component } from 'react';
import './CardHolder.css';
import CardView from '../../Components/Card/CardView';

export default class CardHolder extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {Events} = this.props;
        
        if (Events.length === 0) {
            
            return(
                <div id='event-list'>
                    <CardView/>
                    <CardView/>
                    <CardView/>
                </div>
            );
        }

        else {
            return(
                <div id='event-list'>
                    <h4 style={{'textAlign':'center','marginTop':'24vh'}}>You have not created any event yet</h4>
                </div>
            );
        }
        
    }
}