import React from 'react';
import {connect} from 'react-redux';
import TopNavBar from './top_nav_bar';

import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(TopNavBar);