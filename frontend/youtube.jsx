import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout } from './util/session_api_util'

document.addEventListener('DOMContentLoaded',() => {
    window.login = login;
    window.signup = signup;
    window.logout = logout;



    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<h1>Welcome to YouTube</h1>, root)
})