import React from 'react';
import { Link, withRouter } from 'react-router-dom';



//destructuring currentUser and logout from below
const TopNavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <ul className = 'loggedin-top-nav'>
        <li><i className="fas fa-bars"></i></li>
        <li><Link to = {`/`}><i className="fab fa-youtube"></i></Link></li>
        <li><input type = 'text' placeholder = 'Search' /></li>
        <li><i className="fas fa-search"></i></li>
        <li><i className="fas fa-microphone"></i></li>
        <li><MdVideoCall/></li>
        <li><i className="fas fa-th"></i></li>
        <li><AiFillBell/></li>
        <p>Hello, {currentUser.nickname}</p>
        <button onClick = {logout}>Log Out</button>
      </ul>
    </div>
  ) : (
    <div className = 'top-nav'>
      <ul className = 'loggedout-top-nav'>
        <div className = 'left-top-nav'>
          <ul><i className="fas fa-bars"></i></ul>
          <ul><Link to = {`/`}><i className="fab fa-youtube"></i></Link></ul>
        </div>
        <div className = 'center-top-nav'>
          <ul><input type = 'text' placeholder = 'Search' /></ul>
          <ul><i className="fas fa-search"></i></ul>
          <ul><i className="fas fa-microphone"></i></ul>
        </div>
        <div className = 'right-top-nav'>
          <ul><i className="fas fa-th"></i></ul>
          <ul><Link className="signin-btn" to="/login">Sign in</Link></ul>
        </div>
      </ul>
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