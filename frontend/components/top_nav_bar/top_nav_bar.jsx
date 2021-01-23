import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//destructuring currentUser and logout from below
const TopNavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick = {logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/login">Sign in</Link>
    </div>
  );



  return (
    <header className="nav-bar">
      {/* <h1 className="logo">Youtube</h1> */}
      <div>
          <Link to = {`/`}>Youtube</Link>
        {display}
      </div>
    </header>
  );
};

export default withRouter(TopNavBar);