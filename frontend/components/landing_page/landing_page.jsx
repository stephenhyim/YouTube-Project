import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import TopNavBar from '../top_nav_bar/top_nav_bar_container';
import LeftNavBar from '../left_nav_bar/left_nav_bar_container';
import VideoIndex from '../videos/video_index';




// const LandingPage = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.nickname}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };


// export default LandingPage;


class LandingPage extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className = 'landing-page'>
                <TopNavBar/>
                <div className = 'main-container'>
                    <div><LeftNavBar/></div>
                    <div><VideoIndex/></div>
                </div>
            </div>
        )
    }
} 

export default LandingPage;