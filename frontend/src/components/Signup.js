import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';

class Signup extends Component {
    state = {
        email: "Enter Email",
        username:"Enter Username",
        password: "Enter Password",
        firstName: "Enter First Name",
        lastName: "Enter Last Name"
    }
  
    handleChange1 = (e) =>{
      this.setState({
          email: e.target.value,
      })
    }
    handleChange2 = (e) =>{
        this.setState({
            username: e.target.value,
        })
    }
    handleChange3 = (e) =>{
        this.setState({
            password: e.target.value,
        })
    }
    handleChange4 = (e) =>{
        this.setState({
            firstName: e.target.value,
        })
    }
    handleChange5 = (e) =>{
        this.setState({
            lastName: e.target.value,
        })
    }

    signup(){
        // console.log("Executed")
        // this.props.history.push('./login');
        console.log(this.state);
        axios.post('http://localhost:5000/auth/register', this.state)
        .then(res =>{console.log('Data send');
            this.props.history.push('./login');
            this.props.alert.show("Account created: Verify your email before logging in")
        })
        .catch(err => {console.log(err.data)
            this.props.alert.show("Error Occured: Please check your input values")
        })
    }
    render(){
        return(
            <div className="container">
              <label htmlFor="uname"><b>Email</b></label>
              <input className="input" type="email" onChange={this.handleChange1} value={this.state.email} required />

              <label htmlFor="uname"><b>Username</b></label>
              <input className="input" type="text" onChange={this.handleChange2} value={this.state.username} required />
        
              <label htmlFor="psw"><b>Password</b></label>
              <input className="input" type="password" onChange={this.handleChange3} value={this.state.password} required />

              <label htmlFor="psw"><b>First Name</b></label>
              <input className="input" type="text" onChange={this.handleChange4} value={this.state.fname} required />

              <label htmlFor="psw"><b>Last Name</b></label>
              <input className="input" type="text" onChange={this.handleChange5} value={this.state.lname} required />
        
              <button className="button" type="button" onClick={this.signup.bind(this)}>Signup</button>
            </div>
        );
    }
}

export default withAlert()(Signup)