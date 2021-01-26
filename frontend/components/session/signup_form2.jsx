import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class SignupForm2 extends React.Component {
    
  constructor(props) {
    super(props);
    // this.state = {
      
    //   step: 1
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.back = this.back.bind(this)
    this.renderErrors = this.renderErrors.bind(this);
    
  }

  back(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
      <div className="signup-form-container">
        <h2>Google Logo Placeholder</h2>
        <h2>{this.props.firstname}, welcome to Google</h2>
        <h4>{this.props.email}</h4>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
                <label>Your birthday
                <input type="text" value = {this.props.birthdate} onChange = {this.props.update('birthdate')}/>
                </label>
                <br/>
                <label>Gender
                <input type="text" value = {this.props.gender} onChange = {this.props.update('gender')}/>
                </label>
                {/* <br/>
                <label>Your email address
                <input type="text"
                    value={this.props.email}
                    onChange={this.props.update('email')}
                    className="login-input"
                />
                </label>
                <br/>
                <label>Password
                <input type="password" value = {this.props.password} onChange = {this.props.update('password')}/>
                </label>
                <label>Confirm
                <input type="password" value = {this.props.password} onChange = {this.props.update('password')}/>
                </label>
                <br/> */}
                <br/>
                <span>
                  <button className = "signin-back-button" onClick = {this.back}>Back</button>
                  <button className = "signin-next-button" onClick = {this.handleSubmit}>Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(SignupForm2);

