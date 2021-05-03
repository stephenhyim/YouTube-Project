import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.guestLogin = this.guestLogin.bind(this)
  }  

  guestLogin(e){
    e.preventDefault();
    const guest = {
      email: 'guest@email.com', password: 'guestpassword'
    }
    this.props.login(guest)
  }

  


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() { 
    return (
     
        <div className = 'login-form-one-container'> 
          <div className = 'login-form-one-test'> 

          <div className = 'login-form-one-top'>
            <img className='google-logo' src={window.logo} />
            <h1 className='signin-words'>Sign in</h1>
            <h4 className='signin-words2'>to continue to YouTube</h4>
          </div>

          <div className = 'login-form-one-main'>

            <div className = 'login-form-one-input'>
              
              <input className='login-form-one-email' placeholder='Email' type="text" value = {this.props.email} onChange = {this.props.update('email')}/>
              
              <div className = 'login-form-one-errors'>
                {this.renderErrors()}
              </div>
            </div>

            <div className='guest-login-button-container'>
              <button className='guest-login-button' onClick = {this.guestLogin}>Guest Login</button>
            </div>

            <div className = 'login-form-one-bottom-buttons'>
              <div className = 'login-form-one-button'>
                <div className='create-account-button-container'>
                  <Link className='create-account-button' to='/signup'>Create account</Link>
                </div>
                <div className = 'login-next-button-container'>
                  <div className = "login-next-button" onClick = {this.props.nextStep}>Next</div>
                </div>
              </div> 
            </div>

          </div> 
          </div>
        </div>
      
    );
  }
}

export default withRouter(LoginForm);

