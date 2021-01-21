import React from 'react';
import ReactDOM from 'react-dom';
// import {login, signup, logout } from './util/session_api_util'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded',() => {
    



    const root = document.getElementById('root');
    const store = configureStore();
    // JUST FOR TESTING
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING ENDS


    ReactDOM.render(< Root store={store} />, root)
})