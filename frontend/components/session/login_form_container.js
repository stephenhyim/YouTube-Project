import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeSessionErrors } from '../../actions/session_actions';
import LogIn from './login_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign in'
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};

export default connect(mSTP, mDTP)(LogIn);
