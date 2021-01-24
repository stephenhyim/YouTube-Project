import React from 'react';


class SignupForm2 extends React.Component {
    
    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }


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
                <br/>
                <span>
                  <Link to='/login'>Sign in instead</Link>
                  <button className = "signin-next-button">Next</button>
                </span>  
            </div>
            </form>
      </div>
    );
    }
}

export default SignupForm2;


