import React from 'react';
import {connect} from 'react-redux';
import TopNavBar from './top_nav_bar';

import { login, signup, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        logout: user => dispatch(logout(user)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(TopNavBar);