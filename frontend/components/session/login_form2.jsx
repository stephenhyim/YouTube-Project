import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class LoginForm2 extends React.Component {
    


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
      <div className='login-form-two-container'>

        <div className="login-form-two-top">
          <img className='google-logo' src={window.logo} />
          <h1> Hi {this.props.firstname}</h1>
          <h4>{this.props.email}</h4>
        </div>

        <div className = 'login-form-two-main'>
          <div className = 'login-form-two-input'>
            <div className="signup-form">
              <label className = 'login-form-two-container'>
                <input className='login-form-two-password' placeholder ='Enter your password' type="password" value = {this.props.password} onChange = {this.props.update('password')}/>
              </label>
            <div className="login-form-two-errors">
              {this.renderErrors()}
            </div>
          </div>

            <span>
              <button>Forgot password?</button>
              <button className = "login-next-button" >Next</button>
            </span>  
          </div>
        </div>
        
      </div>
    );
  }
}


export default withRouter(LoginForm2);

