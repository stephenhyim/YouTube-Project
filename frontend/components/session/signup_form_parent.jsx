import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignupForm from './signup_form'


class SignupFormParent extends Component {
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
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
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

    render() {
        const {step} = this.state;
        const {email, password, firstname, lastname, birthdate, gender} = this.state;
        const values =  {email, password, firstname, lastname, birthdate, gender}
        
        switch(step) {
            case 1: 
                return (
                    <SignUpForm
                        nextStep = {this.nextStep}
                        update = {this.update}
                        values = {values}
                    />
                )
            case 2: 
                return (
                    <h1>SignUpForm2</h1>
                )
        }
    }
}

export default SignupFormParent;
