import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class SignupForm2 extends React.Component {

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
    // debugger
    return (
      <div className="signup2-form-container">
        <div className='signup2-form-box'>

          <div className='signup2-form-top'>
            <img className='google-logo' src={window.logo} />
            <h1>{this.props.firstname}, welcome to Google</h1>
            <h4>{this.props.email}</h4>
          </div>

            <div className="signup2-form">
                
                <div className="signupform2-bday">
                  
                    <select id="month" value = {this.props.month} onChange = {this.props.update('month')}>
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
                  
                    <input type="text" value={this.props.day} onChange = {this.props.update('day')} placeholder="Day"/>
                  
                  
                    <input type="text" value={this.props.year} onChange = {this.props.update('year')} placeholder="Year"/>
                  
                </div>
                
                <div className='signupform2-errors'>
                  {this.renderErrors()}
                </div>

                <div>
                  <select id = 'gender' value = {this.props.gender} onChange = {this.props.update('gender')}>
                    <option value = 'Gender'>Gender</option>
                    <option value = 'Female'>Female</option>
                    <option value = 'Male'>Male</option>
                    <option value = 'Rather not say'>Rather not say</option>
                    <option value = 'Custom'>Custom</option>
                  </select>
                </div>
                
                <div className='signupform2-buttons'>
                  <div className='signupform-back-btn'>
                    <div className = "signup-back" onClick = {this.props.prevStep}>Back</div>
                  </div>
                  <div className='signupform2-next-btn'>
                    <button className = "signup2-next-button" >Next</button>
                  </div>
                </div>  
            </div>
            
            </div>
      </div>
    );
  }
}


export default withRouter(SignupForm2);

