import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';



// import TopNavBarContainer from './top_nav_bar/top_nav_bar_container';
import LandingPageContainer from './landing_page/landing_page_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>YouTube</h1>
            </Link>
            <LandingPageContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} />
            <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
);
  
export default App;