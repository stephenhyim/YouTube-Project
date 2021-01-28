import React from 'react';
import {Link, withRouter} from 'react-router-dom';




const LeftNavBar = ({ currentUser}) => {
    // debugger
    const display = currentUser ? (
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

        </div>  
    ) : (
        <div className = 'left-nav-bar'>
            <div className = 'left-group1'>
                <ul className = 'left-icons'>
                    <i className="fas fa-home"></i>
                    <Link className = 'home-link' to ={`/`}>Home</Link>
                </ul>
                <ul className = 'left-icons'>
                    <i className="fas fa-book-open"></i>
                    <Link className = 'library-link' to ={`/`}>Library</Link>
                </ul>
            </div>
        
            <div className = 'left-group2'>
                <ul className = 'signin-btn'>
                    <p>Sign in to like videos, comment, and subscribe.</p>
                </ul>
                <ul>
                    <i className="fas fa-user"></i>
                    <Link className = 'left-signin-link' to = {`/login`}>SIGN IN</Link>
                </ul>
            </div>
        
        </div>  
    );




    return (
        <div>
            <span>{display}</span>
        </div>
        )
    }


export default withRouter(LeftNavBar);