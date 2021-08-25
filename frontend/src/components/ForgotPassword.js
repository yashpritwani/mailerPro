import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert'

class Forgotpassword extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        email: "Enter Email",
    }

    handleChange=(e)=>{
        this.setState({
            email: e.target.value
        })
    }

    generateLink(){
        axios.post('http://localhost:5000/auth/recover', this.state)
        .then(res =>{console.log('Data send');
            this.props.history.push('./login');
        })
        .catch(err => {console.log(err.data)
            this.props.alert.show(`Error Occured: Please recheck your email`)
        })
    }

    render(){
        return(
            <div className="container">
              <label for="uname"><b>Email</b></label>
              <input className="input" type="text" onChange={this.handleChange} value={this.state.email} required />
              <button className="button" type="button" onClick={this.generateLink.bind(this)}>Generate Verification Link</button>
            </div>
        );
    }

}

export default withAlert()(Forgotpassword)