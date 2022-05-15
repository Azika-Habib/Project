
import React, { Component } from 'react';
import AuthServices from '../../services/AuthServices';
import './login.css';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const authServices = new AuthServices()

export default class SignIn extends Component  {
  constructor() {
    super()

    this.state = {
     
       Username: '',
      UsernameFlag: false,

      Password: '',
      PasswordFlag: false,


      open: false,
      Message: '',
    }
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
  })

  if (this.state.Username === '') {
    this.setState({ UsernameFlag: true })
  }
  if (this.state.Password === '') {
    this.setState({ Password: true })
  }
}
handleSubmit = (e) => {
  this.CheckValidity()
  if (
    this.state.Username !== '' &&
    this.state.Password !== '') 
    {
     console.log('Acceptable')
    const data = {
      username: this.state.Username,
      password: this.state.Password,
    }
    authServices
      .SignIn(data)
      .then((data) => {
        console.log('data: ', data)
        if (data.data.isSuccess) {
          this.props.history.push('./Customehome')
        } 
        else {
       console.log('Something went wrong')
           this.setState({ open: true, Message: 'Sign Up Failed' })
        }
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  } else {
    console.log('Not Acceptable')
    this.setState({ open: true, Message: 'Please Fill Required Field' })
  }
}

handleClose = (e, reason) => {
  if (reason === 'clickaway') {
    return
  }
  this.setState({ open: false })
}
render(){
console.log('State:  ', this.state)

  return (
    
    
       <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='/images/car-service.png' alt='spaceship' />
        </div>
        <div className='form-content-right'>
      <form  className='form'>
      <h2><b>Vehicle Workshop Automation</b></h2>
     
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
          error={this.state.UsernameFlag}
            className='form-input'
            type='text'
            name='Username'
            placeholder='Enter your username'
            onChange={this.handleChange}
            value={this.state.Username}
            />
        </div>
      
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
          error={this.state.PasswordFlag}
            className='form-input'
            type='password'
            name='Password'
            placeholder='Enter your password'
            onChange={this.handleChange}
            value={this.state.Password}
          />
        </div>
       
        <button className='form-input-btn' type='submit' onClick={this.handleSubmit}>
          Log in
        </button>
        <span className='form-input-login'>
          Don't have an account? Signup <a href= "/SignUp">here</a>
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
};
}

