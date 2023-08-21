import React  from 'react';
import './Nav.css';

function Nav() {
   
  return (
    <div className="nav">
        <img
          className='nav_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />

        <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Netflix Avatar'
        />

    </div>
  )
}

export default Nav;