import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';


class SignupForm2 extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      password: this.props.password,
      birthdate: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.back = this.back.bind(this)
    this.renderErrors = this.renderErrors.bind(this);
    
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  back(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
        <h2>{this.props.firstname}, welcome to Google</h2>
        <h4>{this.props.email}</h4>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
            {this.renderErrors()}
            <div className="signup-form">
                <br/>
                <label>Your birthday
                <input type="text" value = {this.props.birthdate} onChange = {this.update('birthdate')}/>
                </label>
                <br/>
                <label for = 'gender'>Gender</label>
                <select id = 'gender' value = {this.props.gender} onChange = {this.update('gender')}>
                  <option>Gender</option>
                  <option value = 'Female' onChange = {this.update('gender')}>Female</option>
                  <option value = 'Male' onChange = {this.update('gender')}>Male</option>
                  <option value = 'Rather not say' onChange = {this.update('gender')}>Rather not say</option>
                  <option value = 'Custom' onChange = {this.update('gender')}>Custom</option>
                </select>
                {/* <label for = 'gender'>Gender
                <input type="text" value = {this.props.gender} onChange = {this.update('gender')}/>
                </label> */}
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


export default withRouter(SignupForm2);

