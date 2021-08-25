import React, { Component } from 'react';
import axios from 'axios';
import { withAlert} from 'react-alert'
import './Login.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
    if(response.tokenId!=null){
        console.log(response.Ys.It);
    }
  }

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { change: true };
    // }
    // alert = this.props.alert;

    state = {
        email: "Enter Email",
        password: "Enter Password",
    }

    handleChange1=(e)=>{
        this.setState({
            email: e.target.value,
        })
    }

    handleChange2=(e)=>{
        this.setState({
            password: e.target.value,
        })
    }

    login(){
        console.log("Executed");
        // const reactData={email:"hardikgarg01@gmail.com",password:"Hardik@123"}
        axios.post('http://localhost:5000/auth/login', this.state)
        .then(res =>{console.log('Data send');
            this.props.history.push('./home');
            localStorage.setItem('token', res.data.token);
            // setJwt(res.data.token);
            console.log(res);
        })
        .catch(err => {console.log(err.data);
            this.props.alert.show(`Some Error Occured
            Make sure you credentials are right`);
        })
    }
    render(){
        return(
            <div className="container">
              <label htmlFor="uname"><b>Email</b></label>
              <input className="input" type="text" onChange={this.handleChange1} value={this.state.email} required />
        
              <label htmlFor="psw"><b>Password</b></label>
              <input className="input" type="password" onChange={this.handleChange2} value={this.state.password} required />
        
              <button className="button" type="button" onClick={this.login.bind(this)}>Login</button>
              <GoogleLogin
                    clientId="964967008337-20s0t3f80q472ltu60vpio59itd4vp7f.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {/* document.getElementById('googleButton'); */}
            <button className="btn" onClick={()=>this.props.history.push('./forgotpassword')}>Forgot Password?</button>
            </div>
        );
    }
}

export default withAlert()(Login)