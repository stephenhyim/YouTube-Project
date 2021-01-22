import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to = '/signup'>Sign Up</Link>
        </div>
    )
}

return (
    <div>{display}</div>
)