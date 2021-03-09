import React from 'react';
import { Link, withRouter } from 'react-router-dom';



//destructuring currentUser and logout from below
const TopNavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className = 'top-nav-container'>
      
      <div className = 'left-top-nav'>
        <i className="fas fa-bars"></i>
        <Link className='top-nav-youtube-icon' to = {`/`}><i className="fab fa-youtube"></i></Link>
      </div>
      

      <div className='center-top-nav'>
        <div className='search-bar-container'>
          <ul><input className='search-bar' type = 'text' placeholder = 'Search' /></ul>
          <ul>
            <li><i className="fas fa-search"></i></li>
          </ul>
          
        </div>
      </div>

      <div className = 'right-top-nav-login'>
        <div className = 'right-icon-container-login'>
          <ul><i className="fas fa-video"></i></ul>
        </div>
        <div className = 'avatar'>
          <ul><i className="fas fa-user"></i></ul>
          <button onClick = {() => logout(currentUser)}>Log Out</button>
        </div>
      </div>
    
    </div>
  ) : (
    <div className = 'top-nav-container'>
      
      <div className = 'left-top-nav'>
        <i className="fas fa-bars"></i>
        <Link to = {`/`}><i className="fab fa-youtube"></i></Link>
      </div>
      

      <div className='center-top-nav'>
        <div className='search-bar-container'>
          <ul><input className='search-bar' type = 'text' placeholder = 'Search' /></ul>
          <ul>
            <li><i className="fas fa-search"></i></li>
          </ul>
          
        </div>
      </div>

      <div className = 'right-top-nav'>
        <div className = 'signin-container'>
          <ul><i className="fas fa-user"></i></ul>
          <ul><Link className="signin-btn" to="/login">SIGN IN</Link></ul>
        </div>
      </div>
      
    </div>
  );



  return (
    <header>
      <div className='top-nav-bar'>
        <ul className='top-nav-links'>
          <li>{display}</li>
        </ul>
      </div>
    </header>
  );
};

export default withRouter(TopNavBar);