import 'date-fns';
import React, { Component } from 'react';
import { withAlert} from 'react-alert'
import Select from '@material-ui/core/Select';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Home from './Home';
import { Editor } from '@tinymce/tinymce-react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Mail extends Component {
    state={
      to:"",
      cc:"",
      subject:"",
      text:"",
      type:"None",
      selectedDate : (new Date('2014-08-18T21:11:54')).toString()
    }

    

    handleEditorChange = (e) => {
        this.setState({
          text: e.target.getContent()
        })
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
      }

      handleChange=(e)=>{
        this.setState({
            type: e.target.value,
        })
    }

      handleChange0=(e)=>{
        this.setState({
            password: e.target.value,
        })
    }

      handleChange1=(e)=>{
        this.setState({
            to: e.target.value,
        })
    }

    handleChange2=(e)=>{
        this.setState({
            cc: e.target.value,
        })
    }

    handleChange3=(e)=>{
      this.setState({
          subject: e.target.value,
      })
    }

    handleDateChange=(e)=>{
      this.setState({
        date: e.target.value,
    })
    }

  // handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

    send(){
      console.log(this.state)
      console.log(localStorage.getItem('token'))
      axios.post('http://localhost:5000/user/send', this.state,{ headers: { Authorization:"Bearer " + localStorage.getItem('token') } })
        .then(res =>{console.log('Data send');
            this.props.alert.show("Mail has been sent successfully")
        })
        .catch(err => {console.log(err.data)
            this.props.alert.show("Error Occured: Please try again")
        })
      // axios.post('http://localhost:5000/auth/login', this.state)
      //   .then(res =>{console.log('Data send');
      //       this.props.history.push('./home');
      //   })
    }
    
      render() {
        return (
          <Home>
          <div>
          {/* <form> */}
            <TextField id="standard-basic" style={{width:"100%"}} onChange={this.handleChange0} value={this.state.password} label="Email Password" /><br/>
            <TextField id="standard-basic" style={{width:"100%"}} onChange={this.handleChange1} value={this.state.to} label="To" /><br/>
            <TextField id="standard-basic" style={{width:"100%"}} onChange={this.handleChange2} value={this.state.cc} label="CC" /><br />
            {/* <br/> */}
            
            <TextField id="standard-basic" style={{width:"90%"}} onChange={this.handleChange3} value={this.state.subject} label="Subject" />
            <Button
              variant="contained"
              style={{marginTop:"5px",color:"white",backgroundColor:"black"}}
              onClick={this.send.bind(this)}
            >
              Send
            </Button>
          {/* </form> */}
          <div style={{display:"inline-block",marginRight:"30px",marginTop:"15px"}}>
            <InputLabel id="demo-simple-select-helper-label" >Frequency</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              // style={{marginTop:"30px"}}
              value={this.state.type}
              onChange={this.handleChange}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Seconds"}>Seconds</MenuItem>
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Monthly"}>Monthly</MenuItem>
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            </MuiPickersUtilsProvider>
          <Editor
            apiKey="daynspsccshutc3m389aa5kf58and9coy6komvdfzzixk6f2"
            initialValue="<p>Mail Body Goes Here</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help'
            }}
            onChange={this.handleEditorChange}
          />
          </div>
          </Home>
        );
      }
    
}
export default withAlert()(Mail)
// export default Mail;
