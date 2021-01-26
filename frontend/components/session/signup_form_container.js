import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import SignupFormParent from './signup_form_parent';






// const mSTP = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'signup',
//   };
// };

// const mDTP = dispatch => {
//   return {
//     processForm: (user) => dispatch(signup(user)),
//   };
// };

// export default connect(mSTP, mDTP)(SignupForm);

//TRIAL 2
const mSTP = ( state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
  };
};

const mDTP = dispatch => {
  debugger
  return {
    signup: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};



export default connect(mSTP, mDTP)(SignupFormParent);
//connect combining into one object to send as props