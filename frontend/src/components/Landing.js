import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

class Landing extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { change: true };
    // }
    login(){
        console.log("Executed");
        this.props.history.push('/login');
    }
    signup(){
        console.log("Executed");
        this.props.history.push('/signup');
    }
    render(){
        return(
            <div>
                <p className="head">Welcome to the Mailer!</p>
                <p style={{color:"white",marginLeft:"2%"}}>Compose and schedule your mail all at one place</p>
            <br />
            <br />
            <button className="btn" onClick={this.login.bind(this)}>Login</button>
            <button className="btn" onClick={this.signup.bind(this)}>SignUp</button>
            </div>
        );
    }
}
export default withRouter(Landing);