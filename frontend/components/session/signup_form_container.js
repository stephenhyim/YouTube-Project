import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeSessionErrors, receiveSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import SignupFormParent from './signup_form_parent';


const mSTP = ( state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
  };
};

const mDTP = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors))
  };
};



export default connect(mSTP, mDTP)(SignupFormParent);
