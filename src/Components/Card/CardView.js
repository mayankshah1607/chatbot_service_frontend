import React, { Component } from 'react';
import './CardView.css';
import {Card} from 'react-bootstrap';

export default class CardView extends Component{
    constructor(props){
        super(props)
    }

    onDel = () => {
        fetch('http://localhost:5000/data/delete',{
                method: 'post',
                headers: {'Content-type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    sub_id: this.props.id
                })   
            })
            .then(response => response.json())
            .then(data => {
                if (data.Status) {
                    window.location.href = '/'
                }
            })
    }
    render(){

        const {eventName,orgName, desc, id} = this.props;
        return(
            <div className='cardview'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{eventName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{orgName}</Card.Subtitle>
                    <Card.Text>
                    {desc}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 apikey"><strong>API Key : </strong>{id}</Card.Subtitle>
                    {/* <Card.Link href="#">Edit</Card.Link> */}
                    <Card.Link id='del' style={{'color':'red'}} onClick={this.onDel}>Delete</Card.Link>
                </Card.Body>
                </Card>
            </div>
        );
    }
}