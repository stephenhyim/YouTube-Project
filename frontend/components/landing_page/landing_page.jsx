import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import TopNavBar from '../top_nav_bar/top_nav_bar_container';
import LeftNavBar from '../left_nav_bar/left_nav_bar_container';
import VideoIndex from '../videos/video_index';




class LandingPage extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className = 'landing-page'>
                <TopNavBar/>
                <div className = 'main-container'>
                    <LeftNavBar/>
                    <VideoIndex/>
                </div>
            </div>
        )
    }
} 

export default LandingPage;