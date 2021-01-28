import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignupForm from './signup_form'
import SignupForm2 from './signup_form2'


class SignupFormParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            month: '',
            day: '',
            year: '',
            birthdate: '',
            gender: '',
            step: 1
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextStep() {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep() {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    componentWillUnmount() {
        this.props.removeSessionErrors();
      }

    render() {
        const {step} = this.state;
        const {email, password, confirmPassword, firstname, lastname, birthdate, month, day, year, gender} = this.state;
        const values =  {email, password, firstname, lastname, birthdate, month, day, year, gender}
        let formpage
        switch(step) {
            case 1: 
            
                formpage = (
                    // <h1>SignUpForm1</h1>
                    
                    <SignupForm
                        nextStep = {this.nextStep}
                        update = {this.update}
                        values = { values }
                        // {...values} - look into this option for future
                        errors = { this.props.errors}
                        removeSessionErrors = { this.props.removeSessionErrors }
                        
                    />
                    
                )
                break;
            case 2: 
                formpage = (
                    // <h1>SignUpForm2</h1>
                    <SignupForm2 
                        // updatedBdayForm = {updatedBdayForm}
                        firstname = {firstname}
                        lastname = {lastname}
                        email = {email}
                        password = {password}
                        // birthdate = {birthdate}
                        // month = {month}
                        // day = {day}
                        // year = {year}
                        // gender = {gender}
                        prevStep = {this.prevStep}
                        handleSubmit = {this.handleSubmit}
                        update = {this.update}
                        signup = {this.props.signup}
                        errors = { this.props.errors}
                        removeSessionErrors = { this.props.removeSessionErrors }
                    />
                )
                break;
        }
        return (
            <form onSubmit={this.handleSubmit}>
                {formpage}
            </form>
        )
    }
}

export default withRouter(SignupFormParent);
