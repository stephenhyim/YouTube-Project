import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class LoginForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.continue = this.continue.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  continue(e) {
      e.preventDefault();
      this.props.nextStep();
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
      <div>
        <h2>Google Logo Placeholder</h2>
        <h2>{this.props.formType}</h2>
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div>
                <br/>
                <label>Email
                <input type="text" value = {this.props.values.email} onChange = {this.props.update('email')}/>
                </label>
                <br/>
                <span>
                  <Link to='/signup'>Create account</Link>
                  <button className = "login-next-button" onClick = {this.continue}>Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(LoginForm);

