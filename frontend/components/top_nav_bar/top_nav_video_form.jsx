import React from 'react';
import { Link } from 'react-router-dom';


const TopNavVideoForm = props => {
    return (
        <div className = "top-nav-video-form">
            <div>
                <i className="fas fa-bars"></i>
                <i className="fab fa-youtube"></i>
            </div>
            <div>
                <p>SEARCH BAR</p>
            </div>
            <div>
                <button>CREATE</button>
                <i className="fas fa-user"></i>
            </div>
        </div>
    )
}

export default TopNavVideoForm