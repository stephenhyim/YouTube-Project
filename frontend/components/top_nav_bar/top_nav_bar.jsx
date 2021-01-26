import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MdVideoCall } from 'react-icons/md';
import { FaYoutube, FaBars } from 'react-icons/fa';
import { BsFillGrid3X3GapFill, BsFillMicFill } from "react-icons/bs";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";


//destructuring currentUser and logout from below
const TopNavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick = {logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="signin-btn" to="/login">Sign in</Link>
    </div>
  );



  return (
    <header className="top-nav-bar">
      <div>
        <ul className='top-nav-links'>
          <li><FaBars /></li>
          <li><Link to = {`/`}><FaYoutube/></Link></li>
          <li><input type = 'text' placeholder = 'Search' /></li>
          <li><AiOutlineSearch/></li>
          <li><BsFillMicFill/></li>
          <li><MdVideoCall/></li>
          <li><BsFillGrid3X3GapFill/></li>
          <li><AiFillBell/></li>
          <li>{display}</li>
        </ul>
      </div>
    </header>
  );
};

export default withRouter(TopNavBar);