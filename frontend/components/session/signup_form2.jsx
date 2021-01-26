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
      month: '',
      day: '',
      year: '',
      birthdate: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.back = this.back.bind(this)
    this.renderErrors = this.renderErrors.bind(this);
    
  }

  // updatedBDayForm(){
  //   return {
  //     firstname: this.props.firstname,
  //     lastname: this.props.lastname,
  //     email: this.props.email,
  //     password: this.props.password,
  //     birthdate: `${this.props.year}-${this.props.month}-${this.props.day}`,
  //     gender: this.props.gender
  //   }
  // }

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
                  <label for = 'month'>Month</label>
                    <select id="month" value = {this.state.month} onChange = {this.update('month')}>
                      <option value="Month">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">Decemeber</option>
                    </select>
                  <label>Day
                    <input type="text" value={this.state.day} onChange = {this.update('day')}/>
                  </label>
                  <label>Year
                    <input type="text" value={this.state.year} onChange = {this.update('year')}/>
                  </label>
                </span> */}
                <label>Your birthday
                <input type="text" value = {this.props.birthdate} onChange = {this.update('birthdate')}/>
                </label>
                <br/>
                {/* <label for = 'gender'>Gender</label>
                <select id = 'gender' value = {this.props.gender} onChange = {this.update('gender')}>
                  <option value = 'Gender'>Gender</option>
                  <option value = 'Female'>Female</option>
                  <option value = 'Male'>Male</option>
                  <option value = 'Rather not say'>Rather not say</option>
                  <option value = 'Custom'>Custom</option>
                </select> */}
                <label for = 'gender'>Gender
                <input type="text" value = {this.props.gender} onChange = {this.update('gender')}/>
                </label>
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

