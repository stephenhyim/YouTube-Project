import React from 'react';
import { Link, withRouter } from 'react-router-dom';



//destructuring currentUser and logout from below
const TopNavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className = 'top-nav-container'>
      <div className = 'loggedout-top-nav'>
        <div className = 'left-top-nav'>
          <span className = 'left-icon-container'>
            <ul><i className="fas fa-bars"></i></ul>
            <ul><Link to = {`/`}><i className="fab fa-youtube"></i></Link></ul>
          </span>
        </div>

        <div className = 'center-top-nav'>
          <span className = 'search-bar-container'>
            <ul><input type = 'text' placeholder = 'Search' /></ul>
            <ul><i className="fas fa-search"></i></ul>
            <ul><i className="fas fa-microphone"></i></ul>
          </span>
        </div>

        <div className = 'right-top-nav'>
          <span className = 'right-icon-container'>
            <ul><i className="fas fa-th"></i></ul>
            <ul><i className="fas fa-ellipsis-v"></i></ul>
          </span>
          <span className = 'signin-container'>
            <ul><i className="fas fa-user"></i></ul>
            <ul><button onClick={()=> logout(currentUser)}>Log Out</button></ul>
          </span>
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
        <span className='search-bar-container'>
          <ul><input className='search-bar' type = 'text' placeholder = 'Search' /></ul>
          <ul>
            <li><i className="fas fa-search"></i></li>
          </ul>
          <ul>
            <li><i className="fas fa-microphone"></i></li>
          </ul>
        </span>
      </div>

      <div className = 'right-top-nav'>
        <span className = 'right-icon-container'>
          <ul><i className="fas fa-th"></i></ul>
          <ul><i className="fas fa-ellipsis-v"></i></ul>
        </span>
        <span className = 'signin-container'>
          <ul><i className="fas fa-user"></i></ul>
          <ul><Link className="signin-btn" to="/login">SIGN IN</Link></ul>
        </span>
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