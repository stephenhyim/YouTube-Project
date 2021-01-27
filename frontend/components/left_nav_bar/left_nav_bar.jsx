import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class LeftNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className = 'left-nav-bar'>
                <div className = 'left-group1'>
                    <span className = 'left-home'>
                        <ul className = 'left-icons'>
                            <li className = 'icon'>
                                <i className="fas fa-home"></i>
                            </li>
                            <li className = 'left-link'>
                                <Link className = 'home-link' to ={`/`}>Home</Link>
                            </li>
                        </ul>
                    </span>
                    <ul className = 'left-icons'>
                        <li className = 'icon'>
                            <i className="fas fa-book-open"></i>
                        </li>
                        <li className = 'left-link'>
                            <Link className = 'library-link' to ={`/`}>Library</Link>
                        </li>
                    </ul>
                    <ul className = 'left-icons'>
                        <li className = 'icon'>
                            <i className="fas fa-thumbs-up"></i>
                        </li>
                        <li className = 'left-link'>
                            <Link className = 'liked-videos-link' to ={`/`}>Liked videos</Link>
                        </li>
                    </ul>
                </div>
                
                <div className = 'left-group2'>
                    <ul className = 'signin-btn'>
                        <li className = 'signin-link'>
                            <Link className = 'left-signin-link' to = {`/login`}>SIGN IN</Link>
                        </li>
                    </ul>
                </div>

                <div className = 'left-group3'>
                    <ul className = 'test-parent'>
                        <span className = 'test-span'>
                            <i className="fas fa-thumbs-up"></i>
                            <Link className = 'liked-videos-link' to ={`/`}>Liked videos</Link>
                        </span>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default withRouter(LeftNavBar);