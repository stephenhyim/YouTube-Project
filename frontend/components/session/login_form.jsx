import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class LoginForm extends React.Component {
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
      <div className="login-form-container">
        <h3>Google Logo Placeholder</h3>
        {this.props.formType}
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              
              {this.renderErrors()}
                <div className="login-form">
                <br/>
                  <label>Email:
                  <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                  />
                  </label>
                  <br/>
                  <span>
                    <Link to='/signup'>Create account</Link>
                    <button className = "login-next-button">Next</button>
                  </span>  
                </div>
            </form> 
      </div>
    );
  }
}

export default withRouter(LoginForm);


