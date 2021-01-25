import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
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
const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mDTP = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};



export default connect(mSTP, mDTP)(SignupFormParent);
