import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';


import TopNavBarContainer from './top_nav_bar/top_nav_bar_container';
import LandingPage from './landing_page/landing_page';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <header>
            <Route exact path = '/' component = {LandingPage} />
        </header>
        
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            
        </Switch>
    </div>
);
  
export default App;