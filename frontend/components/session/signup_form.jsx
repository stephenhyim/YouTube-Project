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
    // debugger
    return (
      <div className="signup-form-container">
        <div className ='signup-form-box'>

          <div className='signup-form-top'>
            <img className='google-logo' src={window.logo} />
            <h1>Create your Google Account</h1>
            <h4>to continue to YouTube</h4>
          </div>

            <div className="signup-form">
              
              <span className='signupform-name'>
                
                  <input className='signup-firstname' placeholder='First name' type="text" value = {this.props.values.firstname} onChange = {this.props.update('firstname')}/>
                
                  <input className='signup-lastname' placeholder='Last name' type="text" value = {this.props.values.lastname} onChange = {this.props.update('lastname')}/>
               
              </span>

              
              <input className='signup-email' id="signup-email" type="text" placeholder='Your email address' value={this.props.values.email} onChange={this.props.update('email')} className="login-input"/>
                

              <div className='signupfrom-errors'>
                {this.renderErrors()}
              </div>

              <span className='signupform-pw-container'>
                
                <input className='signup-pw' placeholder='Password' type="password" value = {this.props.values.password} onChange = {this.props.update('password')}/>
              
                <input className='signup-pw-confirm' placeholder='Confirm' type="password" value = {this.props.values.confirmPassword} onChange = {this.props.update('confirmPassword')}/>
                
              </span>

              <div className='signupform-buttons'>
                <div className='signup-container'> 
                  <Link className='login-btn' to='/login'>Sign in instead</Link>
                </div>
                <div className='signin-next-container'>
                  <div className = "signin-next-button" onClick = {this.props.nextStep} >Next</div>
                </div>
              </div> 

            </div>
             
            
        </div>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(SignupForm);


//on submit have some logic that checks the confirm password and password match
// if true drop the confirm pw field to persist to the db