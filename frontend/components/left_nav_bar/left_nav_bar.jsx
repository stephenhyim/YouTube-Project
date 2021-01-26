import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class LeftNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Left Nav Bar</h1>
                <ul className = 'left-nav-bar'>
                    <Link to ={`/`}>Home</Link>
                    <Link to ={`/`}>Trending</Link>
                    <Link to ={`/`}>Subscriptions</Link>
                    <Link to ={`/`}>Library</Link>
                    <Link to ={`/`}>History</Link>
                    <Link to = {`/login`}>SIGN IN</Link>
                </ul>
            </div>
        )
    }
}

export default withRouter(LeftNavBar);