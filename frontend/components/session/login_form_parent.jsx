import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import LoginForm from './login_form'
import LoginForm2 from './login_form2'


class LoginFormParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            step: 1
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    nextStep() {
        const {step} = this.state
        this.setState({
            step: step + 1
        });
    }

    prevStep() {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    componentWillUnmount() {
        this.props.removeSessionErrors();
      }

    render() {
        const {step} = this.state;
        const {email, password } = this.state;
        const values =  {email, password}
        let formpage
        switch(step) {
            case 1: 
            
                formpage = (
                    // <h1>SignUpForm1</h1>
                    <LoginForm
                        nextStep = {this.nextStep}
                        update = {this.update}
                        values = { values }
                        // {...values} - look into this option for future
                        errors = { this.props.errors}
                        login = {this.props.login}
                        
                        removeSessionErrors = { this.props.removeSessionErrors }
                        
                    />
                )
                break;
            case 2: 
                formpage = (
                    // <h1>SignUpForm2</h1>
                    <LoginForm2 
                        // updatedBdayForm = {updatedBdayForm}
                        
                        email = {email}
                        password = {password}
                        // birthdate = {birthdate}
                        // month = {month}
                        // day = {day}
                        // year = {year}
                        // gender = {gender}
                        prevStep = {this.prevStep}
                        update = {this.update}
                        login = {this.props.login}
                        errors = { this.props.errors}
                        removeSessionErrors = { this.props.removeSessionErrors }
                    />
                )
                break;
        }
        return (
            <form onSubmit = {this.handleSubmit}>
                {formpage}
            </form>
        )
    }
}

export default withRouter(LoginFormParent);
