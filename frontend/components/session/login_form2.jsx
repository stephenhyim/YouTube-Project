import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class LoginForm2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: ''
    }
  }
    
  // componentDidMount() {
  //   debugger
  //   fetch('/api/users/') 
  //     .then(res => res.json())
  //     console.log(res.json)
  //     .then(result => {
  //       console.log(result)
  //       this.setState({
  //         firstname: result
  //       })
  //     })
  // }

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
      <div className='login2-form-two-container'>
        <div className='login2-form-two-test'>

        <div className="login2-form-two-top">
          <img className='google-logo' src={window.logo} />
          <h1 className='login2-header'> Hi {this.props.firstname}</h1>
          <h4 className='login2-header2'>{this.props.email}</h4>
        </div>

        <div className = 'login2-form-two-main'>

          <div className = 'login2-form-two-input'>
            
            <input className='login2-form-two-password' placeholder ='Enter your password' type="password" value = {this.props.password} onChange = {this.props.update('password')}/>
            
            <div className="login2-form-two-errors">
              {this.renderErrors()}
            </div>
          </div>

            <div className='login2-form-two-bottom-buttons'>
              <div className ='forgot-pw-container'>
                <div className='forgot-pw'>Forgot password?</div>
              </div>
              <div className='login2-form-two-next-button-container'>
                <button className = "login2-form-two-next-button" >Next</button>
              </div>
            </div>

        </div>
        
        </div>
      </div>
    );
  }
}


export default withRouter(LoginForm2);

