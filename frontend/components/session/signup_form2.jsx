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
                {/* <span>
                  <label>Month
                    <select id="month">
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="Decemeber">Decemeber</option>
                    </select>
                  </label>
                  <label>Day
                    <input type="text" value=""/>
                  </label>
                </span> */}
                <label>Your birthday
                <input type="text" value = {this.props.birthdate} onChange = {this.update('birthdate')}/>
                </label>
                <br/>
                <label for = 'gender'>Gender</label>
                <select id = 'gender' value = {this.props.value} onChange = {this.update('gender')}>
                  <option value = 'Gender'>Gender</option>
                  <option value = 'Female'>Female</option>
                  <option value = 'Male'>Male</option>
                  <option value = 'Rather not say'>Rather not say</option>
                  <option value = 'Custom'>Custom</option>
                </select>
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

