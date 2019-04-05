import React, { Component } from 'react';
import './CardHolder.css';
import CardView from '../../Components/Card/CardView';

export default class CardHolder extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
    }
    
    render(){
        const {Events} = this.props;

        const cards = Events.map((obj,i) => {
            return(
                <CardView id={obj._id} eventName={obj.EventName} orgName={obj.Organization} desc={obj.Desc}/>
            );
        })
        
        if (Events.length !== 0) {
            
            return(
                <div id='event-list'>
                    {cards}
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