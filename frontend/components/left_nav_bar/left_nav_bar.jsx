import React from 'react';
import {Link, withRouter} from 'react-router-dom';




const LeftNavBar = ({ currentUser}) => {
    const display = currentUser ? (
        <div className = 'left-nav-bar'>
            <div className = 'left-group1'>
                <div className = 'left-home'>
                    <Link to ={`/`}><ul className = 'left-icons'>
                        <i className="fas fa-home"></i>
                        <p className = 'home-link'>Home</p>
                    </ul></Link>
                </div>
                <Link to ={`/users/${currentUser}`}><ul className = 'left-icons'>
                    <i className="fas fa-book-open"></i>
                    <p className = 'library-link'>Library</p>
                </ul></Link>
            </div>
            <div className = "left-group1">
                <a href="https://github.com/stephenhyim" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-github"></i>
                    <p className="github-link">GitHub</p>
                </ul></a>
                <a href="https://www.linkedin.com/in/stephenhyim/" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-linkedin"></i>
                    <p className="github-link">LinkedIn</p>
                </ul></a>
                <a href="https://angel.co/u/stephen-yim" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-angellist"></i>
                    <p className="github-link">AngelList</p>
                </ul></a>
            </div>

        </div>  
    ) : (
        <div className = 'left-nav-bar'>
            <div className = 'left-group1'>
                <Link to ={`/`}><ul className = 'left-icons'>
                    <i className="fas fa-home"></i>
                    <p className = 'home-link' to ={`/`}>Home</p>
                </ul></Link>
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

            <div className = "left-group1">
                <a href="https://github.com/stephenhyim" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-github"></i>
                    <p className="github-link">GitHub</p>
                </ul></a>
                <a href="https://www.linkedin.com/in/stephenhyim/" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-linkedin"></i>
                    <p className="github-link">LinkedIn</p>
                </ul></a>
                <a href="https://angel.co/u/stephen-yim" target="_blank" rel="noopener noreferrer"><ul>
                    <i className="fab fa-angellist"></i>
                    <p className="github-link">AngelList</p>
                </ul></a>
            </div>
        
        </div>  
    );




    return (
        <div className = "left-nav-bar">{display}</div>
        )
    }


export default withRouter(LeftNavBar);