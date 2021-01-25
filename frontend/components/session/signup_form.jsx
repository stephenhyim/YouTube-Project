import React from 'react';
import {Link, withRouter } from 'react-router-dom';
// import SignupForm2 from './signup_form2';

class SignupForm extends React.Component {
    
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       firstname: '',
//       lastname: '',
//       birthdate: '',
//       gender: '',
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   nextStep = () => {
//       const { step } = this.state;
//       this.setState({
//           step: step + 1
//       });
//   }

//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.processForm(user);
//   }

continue = e => {
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
    // const { step } = this.state;
    // const { firstname, lastname, email, password, birthdate, gender } = this.state;
    // const values = { firstname, lastname, email, password, birthdate, gender }
    
    // switch (step) {
    //     case 1:
    //         return (
    //             <SignUpForm2
    //                 nextStep = {this.nextStep}
    //                 values = {values}
    //             />
    //         )
            
    // }
    const {values } = this.props
    return (
      <div className="signup-form-container">
        <h2>Google Logo Placeholder</h2>
        <h2>Create your Google Account</h2>
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
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
                <br/>
                <span>
                  <Link to='/login'>Sign in instead</Link>
                  <button className = "signin-next-button" onClick = {(e)=> this.continue()}>Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
  }
}

// export default SignupForm;
export default withRouter(SignupForm);


//on submit have some logic that checks the confirm password and password match
// if true drop the confirm pw field to persist to the db