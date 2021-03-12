import React from 'react';
import {Link, withRouter} from 'react-router-dom';




const LeftNavBar = ({ currentUser}) => {
    // debugger
    const display = currentUser ? (
        <div className = 'left-nav-bar'>
            <div className = 'left-group1'>
                <div className = 'left-home'>
                    <ul className = 'left-icons'>
                        <i className="fas fa-home"></i>
                        <Link className = 'home-link' to ={`/`}>Home</Link>  
                    </ul>
                </div>
                <ul className = 'left-icons'>
                    <i className="fas fa-book-open"></i>
                    <Link className = 'library-link' to ={`/`}>Library</Link>
                </ul>
                <ul className = 'left-icons'>
                    <i className="fas fa-thumbs-up"></i>
                    <Link className = 'liked-videos-link' to ={`/`}>Liked videos</Link>
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
                <ul>
                    <p>Sign in to like videos, comment, and subscribe.</p>
                </ul>
                <div className='signin-btn-container'>
                    <ul className = 'signin-btn'><i className="fas fa-user"></i></ul>
                    <ul><Link className = 'left-signin-link' to = {`/login`}>SIGN IN</Link></ul>
                </div>
            </div>
        
        </div>  
    );




    return (
        <div>
            <div>{display}</div>
        </div>
        )
    }


export default withRouter(LeftNavBar);