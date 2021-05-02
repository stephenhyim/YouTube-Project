import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

import LandingPage from './landing_page/landing_page';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import UserShowContainer from './user/user_container'
import VideoShowContainer from './videos/video_show_container';
import CreateVideoFormContainer from './videos/create_video_form_container';
import SearchIndexContainer from './search_bar/search_index_container'

const App = () => (
    <div className = "main">
            
        <Route exact path = '/' component = {LandingPage} />
        
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path = "/users/:userId" component={UserShowContainer} />
            <Route exact path = '/videos/:videoId' component = {VideoShowContainer} />
            <Route exact path = '/upload/video' component = {CreateVideoFormContainer} />
            <Route exact path = '/search' component = {SearchIndexContainer} />
        </Switch>
        
    </div>
);
  
export default App;