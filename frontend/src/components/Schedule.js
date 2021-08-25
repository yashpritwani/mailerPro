import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';

export default class Schedule extends Component {
    emails = []
    constructor(props){
        super(props);
        this.states = { change: true };
        axios.post('http://localhost:5000/user/getschedule', this.state,{ headers: { Authorization:"Bearer " + localStorage.getItem('token') } })
        .then(res =>{
            // console.log('Data send');
            this.emails = res.data.emails;
            // console.log(res.data.emails)
            localStorage.setItem('emails',JSON.stringify(res.data.emails))
            // console.log(this.state.data.emails);
            // console.log(this.emails);
            // this.props.alert.show("Mail has been sent successfully")
        })
        .catch(err => {console.log(err.data)
            // this.props.alert.show("Error Occured: Please try again")
        })
        this.emails = JSON.parse(localStorage.getItem('emails'));
        console.log(this.emails)
    }

    render(){
        return(
            <Home>
            <div>
            <h1 style={{marginTop: "10px"}}>Recently Sent Emails</h1>
                {this.emails.map((plan,i) =>{
                    return(
                        <div style={{marginTop: "10px"}}>
                            <span style={{fontWeight: 'bold',marginRight: "2px",marginLeft:"10px"}}>
                                 {plan.type}
                                 {plan.selectedDate}
                                 <span style={{fontWeight: 'bold',marginRight: "2px",marginLeft:"10px"}}>{plan.from}</span>
                                  
                            </span>
                                {plan.subject} 
                        </div>
                 )})}
            </div>
            </Home>
        );
    }
}