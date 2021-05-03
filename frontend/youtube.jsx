import React from 'react';
import ReactDOM from 'react-dom';
// import {login, signup, logout } from './util/session_api_util'
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',() => {
    let store;

    if (window.currentUser) {
      const { currentUser } = window;
      const { id } = currentUser;
      const preloadedState = { 
        entities: {
          users: {
            [id]: currentUser
          }
        },
        session: { id }
        };
      store = configureStore(preloadedState);

      delete window.currentUser;

    } else {
        store = configureStore();
    }
  



    const root = document.getElementById('root');
    // JUST FOR TESTING
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    // TESTING ENDS


    ReactDOM.render(< Root store={store} />, root)
})