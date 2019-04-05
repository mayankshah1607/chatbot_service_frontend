import React, { Component } from 'react';
import './Main.css';
import CardHolder from '../../Components/CardHolder/CardHolder';
import cookie from 'react-cookies';


export default class Main extends Component{
    constructor(props){
        super(props)
    }

    onLogout = () => {
        cookie.remove('evento');
        window.location.href = '/';
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        const {Name, Events} = this.props;
        return(
            <div id='main'>
                <p id='logout' onClick={this.onLogout}>Log Out</p>
                <h4 style={{'textAlign':'center'}}>Hello, {Name}!</h4>
                <h5 style={{'fontWeight':'100','textAlign':'center','color':'#686868'}}>Here's a list of all your events</h5>
                <br/><br/>
                <h6 style={{'fontWeight':'100','textAlign':'center'}}>Alternatively, you could also <a id='add-new' href='/addnew'>add a new</a> event</h6>

                <CardHolder Events={Events}/>
            </div>
        );
    }
}