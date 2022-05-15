import React, { Component } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "./signup.css";
import AuthServices from "../../services/AuthServices.js";

const authService = new AuthServices()

export default class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      Radiovalue: 'Customer',
       Username: '',
      UsernameFlag: false,

      Email: '',
      EmailFlag: false,

      Password: '',
      PasswordFlag: false,


      open: false,
      Message: '',
    }
  }
 
  handleRadioChange = (e) => {
    this.setState({ RadioValue: e.target.value })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(
      { [name]: value },
      console.log('Name :', name, 'Value :', value),
    )
    
}
 


  CheckValidity() {
    console.log("Checkvalidity Calling")
    //Reset Flag
    this.setState({
      UsernameFlag: false,
      PasswordFlag: false,
      EmailFlag: false,
    })

    if (this.state.Username === '') {
      this.setState({ UsernameFlag: true })
    }

    if (this.state.Email === '') {
      this.setState({ EmailFlag: true })
    }
    if (this.state.Password === '') {
      this.setState({ Password: true })
    }
  }

  handleSubmit = (e) => {
    this.CheckValidity()
    if (
      this.state.Username !== '' &&
      this.state.Email !== '' &&
      this.state.Password !== '') 
      {
       console.log('Acceptable')
      const data = {
        username: this.state.Username,
        emailID: this.state.Email,
        password: this.state.Password,
        role: this.state.Radiovalue,
      }
      authService
        .SignUp(data)
        .then((data) => {
          console.log('data: ', data)
          // if (data.data.isSuccess) {
              this.props.history.push('/SignIn')
          // } 
    //      console.log('Something went wrong')
    //              else {
    //  this.setState({ open: true, Message: data.data.message })
    //       }
        })
        .catch((error) => {
          console.log('error: ', error)
          this.setState({open: true,   Message:'Something Went Wrong'  } )
        })
    } else {
      console.log('Not Acceptable')
      this.setState({ open: true, Message: 'Please Fill Required Field' })
    }
  }

   handleSignIn = (e) => {
     this.props.history.push('./SignIn')
   }
   handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false })
  }

  render() {
    console.log('state :', this.state)
    return (
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="/images/pic1.png" alt="spaceship" />
        </div>
        <div className="form-content-right">
          <form className="form">
            <h2>
              <b>Vehicle Workshop Automation</b>
            </h2>
            <h1>
              Get started with us today! Create your account by filling out the
              information below.
            </h1>
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                error={this.state.UsernameFlag}
                className="form-input"
                type="text"
                name="Username"
                placeholder="Enter your username"
                value={this.state.Username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                error={this.state.EmailFlag}
                className="form-input"
                type="email"
                name="Email"
                placeholder="Enter your email"
                value={this.state.Email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                error={this.state.PasswordFlag}
                className="form-input"
                type="password"
                name="Password"
                placeholder="Enter your password"
                value={this.state.Password}
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="form-inputs">
              <label className="form-label">User-type</label> <br />
               <input
                className="roles"
                type="radio"
                name="Role"
                value={this.state.RoleValue}
                onChange={this.handleRadioChange}
              />
              Customer
              <input
                className="roles"
                type="radio"
                name="Role"
                value={this.state.RoleValue}
                onChange={this.handleRadioChange}
              />
              Admin <br /> 

            </div> */}
            <button
              className="form-input-btn"
              
              onClick={this.handleSubmit}
            >
              Sign up
            </button>
            <span className="form-input-login">
              Already have an account? Login <a href="/SignIn">here</a>
            </span>
          </form>
        </div>
        <Snackbar
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message={this.state.Message}
      
        action={
          <React.Fragment>
            <button color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
          />
      
      </div>
      
    );
  }
}
