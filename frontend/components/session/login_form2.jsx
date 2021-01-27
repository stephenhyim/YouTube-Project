import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class LoginForm2 extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    
  }



  componentWillUnmount() {
    this.props.removeSessionErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    debugger
    return (
      <div className="signup-form-container">
        <h2>Google Logo Placeholder</h2>
        <h2> Hi {this.props.firstname}</h2>
        <h4>{this.props.email}</h4>
            <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
          
                <label>Enter your password
                <input type="password" value = {this.props.value} onChange = {this.update('password')}/>
                </label>
                <br/>
           
                <span>
                  <button>Forgot password?</button>
                  <button className = "login-next-button" onClick = {this.handleSubmit}>Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
  }
}


export default withRouter(LoginForm2);

