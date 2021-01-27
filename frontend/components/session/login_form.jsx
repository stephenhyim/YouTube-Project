import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class LoginForm extends React.Component {
    
 

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
      <div>
        <h2>Google Logo Placeholder</h2>
        <h2>{this.props.formType}</h2>
        <h4>to continue to YouTube</h4>
            <div className = 'login-form-box'>
            {this.renderErrors()}
            <div>
                <br/>
                <label>Email
                <input type="text" value = {this.props.values.email} onChange = {this.props.update('email')}/>
                </label>
                <br/>
                <span>
                  <Link to='/signup'>Create account</Link>
                  <div className = "login-next-button" onClick = {this.props.nextStep}>Next</div>
                </span>  
            </div>
            </div>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(LoginForm);

