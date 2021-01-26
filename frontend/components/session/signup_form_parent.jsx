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
            firstname: '',
            lastname: '',
            birthdate: '',
            gender: '',
            step: 1
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.update = this.update.bind(this);

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
        this.props.processForm(user);
    }

    render() {
        const {step} = this.state;
        const {email, password, firstname, lastname, birthdate, gender} = this.state;
        const values =  {email, password, firstname, lastname, birthdate, gender}
        
        switch(step) {
            case 1: 
            
                return (
                    // <h1>SignUpForm1</h1>
                    <SignupForm
                        nextStep = {this.nextStep}
                        update = {this.update}
                        values = { values }
                        errors = { this.props.errors}
                        
                    />
                )
            case 2: 
                return (
                    // <h1>SignUpForm2</h1>
                    <SignupForm2 
                        update = {this.update}
                        prevStep = {this.prevStep}
                        signup = {this.props.signup}
                        errors = { this.props.errors}
                    />
                )
        }
    }
}

export default withRouter(SignupFormParent);
