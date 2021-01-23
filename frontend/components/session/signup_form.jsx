import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
        <h2>Create your Google Account</h2>
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
                <label>First Name
                <input type="text" value = {this.state.firstname} onChange = {this.update('firstname')}/>
                </label>
                <label>Last Name
                <input type="text" value = {this.state.lastname} onChange = {this.update('lastname')}/>
                </label>
                <br/>
                <label>Your email address
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                />
                </label>
                <br/>
                <label>Password
                <input type="password" value = {this.state.password} onChange = {this.update('password')}/>
                </label>
                <label>Confirm
                <input type="password" value = {this.state.password} onChange = {this.update('password')}/>
                </label>
                <span>

                  <Link to='/login'>Sign in instead</Link>
                  <button className = "signin-next-button">Next</button>
                </span>  
                {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
            </div>
            </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);