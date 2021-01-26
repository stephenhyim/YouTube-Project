import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class LoginFormParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            step: 1
        }
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
        return e => this.setState({[field]: e.currentTarget.value});
    }


    render() {
        const {step} = this.state;
        const {email, password} = this.state;
        const values = {email, password}

        switch(step){
            case 1:
                return (
                    <div>Case 1</div>
                )
            case 2:
                return (
                    <div>Case 2</div>
                )
            }
        }
    }



}


