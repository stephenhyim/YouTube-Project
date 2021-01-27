import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class LeftNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className = 'left-nav-bar'>
                <div className = 'left-home'>
                    <ul className = 'left-icons'>
                        <li className = 'icon'><i className="fas fa-home"></i></li>
                        <li><Link to ={`/`}>Home</Link></li>
                    </ul>
                    <ul className = 'left-icons'>
                        <li className = 'icon'><i className="fas fa-book-open"></i></li>
                        <li><Link to ={`/`}>Library</Link></li>
                    </ul>
                    <ul className = 'left-icons'>
                        <li className = 'icon'><i className="fas fa-heart"></i></li>
                        <li><Link to ={`/`}>Liked Videos</Link></li>
                    </ul>
                </div>
                
                <div className = 'left-signin'>
                    <ul className = 'signin-btn'>
                        <li className = 'signin-link'><Link to = {`/login`}>SIGN IN</Link></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default withRouter(LeftNavBar);