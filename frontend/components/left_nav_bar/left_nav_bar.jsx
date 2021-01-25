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
                <Link to ={`/`}>Home</Link>
                <Link>Trending</Link>
                <Link>Subscriptions</Link>
                <Link>Library</Link>
                <Link>History</Link>
                <Link to = {`/login`}>SIGN IN</Link>
            </div>
        )
    }
}

export default withRouter(LeftNavBar);