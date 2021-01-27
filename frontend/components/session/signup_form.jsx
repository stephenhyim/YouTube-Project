import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class SignupForm extends React.Component {
    
 

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

  // need to target errors for specific fields

  render() { 
    debugger
    return (
      <div className="signup-form-container">
        <h2>Google Logo Placeholder</h2>
        <h2>Create your Google Account</h2>
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.props.nextStep} className="signup-form-box">
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
                <label>First Name
                <input type="text" value = {this.props.values.firstname} onChange = {this.props.update('firstname')}/>
                </label>
                <label>Last Name
                <input type="text" value = {this.props.values.lastname} onChange = {this.props.update('lastname')}/>
                </label>
                <br/>
                <label>Your email address
                <input type="text"
                    value={this.props.values.email}
                    onChange={this.props.update('email')}
                    className="login-input"
                />
                </label>
                <br/>
                <label>Password
                <input type="password" value = {this.props.values.password} onChange = {this.props.update('password')}/>
                </label>
                <label>Confirm
                <input type="password" value = {this.props.values.confirmPassword} onChange = {this.props.update('confirmPassword')}/>
                </label>
                <br/>
                <span>
                  <Link to='/login'>Sign in instead</Link>
                  <button className = "signin-next-button" onSubmit = {this.props.nextStep}>Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(SignupForm);


//on submit have some logic that checks the confirm password and password match
// if true drop the confirm pw field to persist to the db