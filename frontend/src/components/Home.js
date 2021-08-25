import React, { Component } from 'react';
// import Mail from './Mail';
// import Login from './Login';
// import Signup from './Signup';
// import History from './History';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
} from 'react-router-dom';
// import './Login.css';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { change: true };
    // }
    logout(){
        console.log("Executed")
        this.props.history.push('./login');
    }
    render() {
        return (
            <Router>
                <Grid container spacing={3}>
                    <Grid item xs={2} style={{ backgroundColor: "black", height: "100vh" }}>
                        <button className="btn1" style={{marginTop:"30px"}} onClick={()=>{this.props.history.push('/mail')}}>Mail</button>
                        <button className="btn1" onClick={()=>{this.props.history.push('/schedule')}}>Home</button>
                        <button className="btn1" onClick={()=>{this.props.history.push('/history')}}>History</button>
                        <button className="btn1" onClick={this.logout.bind(this)}>Logout</button>
                    </Grid>
                    <Grid item xs={10} style={{backgroundColor:"white"}}>
                        <div className="App">
                            {this.props.children}
                        </div>
                    </Grid>
                </Grid>
            </Router>
        );
    }
}

export default withRouter(Home);