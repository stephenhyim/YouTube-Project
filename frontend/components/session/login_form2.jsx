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
    debugger
    return (
      <div className="signup-form-container">
        <h2>Google Logo Placeholder</h2>
        <h2> Hi {this.props.firstname}</h2>
        <h4>{this.props.email}</h4>
            <div className="login-form-box">
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
          
                <label>
                <input placeholder ='Enter your password' type="password" value = {this.props.password} onChange = {this.props.update('password')}/>
                </label>
                <br/>
           
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

