import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
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
        <h2>Google Logo Placeholder</h2>
        <h4>to continue to YouTube</h4>
            <form onSubmit={this.handleSubmit} className="login-form-box">
            Please {this.props.formType} or {this.props.navLink}
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
                <span>
                  <Link to='/signup'>Create account</Link>
                  <button className = "signin-next-button">Next</button>
                </span>  
                {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
            </div>
            </form>
      </div>
    );
  }
}

export default LoginForm;