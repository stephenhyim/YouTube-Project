import React from 'react';
import {connect} from 'react-redux';
import TopNavBar from './top_nav_bar';

import { login, signup, logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        logout: user => dispatch(logout(user))
    }
}

export default connect(mSTP, mDTP)(TopNavBar);