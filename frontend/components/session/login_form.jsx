import React from 'react';
import {Link, withRouter } from 'react-router-dom';

// import SignupForm2 from './signup_form2';


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.guestLogin = this.guestLogin.bind(this)
  }  
  guestLogin(){
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
    // debugger
    return (
     
        <div className = 'login-form-one-container'> 

          <div className = 'login-form-one-top'>
            <img className='google-logo' src={window.logo} />
            <h1 className='signin-words'>Sign in</h1>
            <h4 className='signin-words2'>to continue to YouTube</h4>
          </div>

          <div className = 'login-form-one-main'>
            <div className = 'login-form-one-input'>
              <label className = 'login-form-one-email-container'>
                <input className='login-form-one-email' placeholder='Email' type="text" value = {this.props.values.email} onChange = {this.props.update('email')}/>
              </label>
              <div className = 'login-form-one-errors'>
                {this.renderErrors()}
              </div>
            </div>

            <div className='guest-login-button-container'>
              <button className='guest-login-button' onClick = {this.guestLogin}>Guest Login</button>
            </div>

            <div className = 'login-form-one-bottom-buttons'>
              <span className = 'login-form-one-button'>
                <Link className='create-account-button' to='/signup'>Create account</Link>
                <div className = 'login-next-button-container'>
                  <div className = "login-next-button" onClick = {this.props.nextStep}>Next</div>
                </div>
              </span> 
            </div>
          </div> 
            
        </div>
      
    );
  }
}

// export default SignupForm;
export default withRouter(LoginForm);

