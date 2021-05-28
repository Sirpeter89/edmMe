// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  let navClass = 'navButtonContainer'
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='userButtons'>
            <NavLink to="/myEvents" style={{textDecoration: 'none'}}>My Events</NavLink>
        </div>
        <div className='userButtons'>
            <NavLink to="/myTickets" style={{textDecoration: 'none'}}>My Tickets</NavLink>
        </div>
        <div className='userButtons'>
            <NavLink to="/bookmarks" style={{textDecoration: 'none'}}>Bookmarks</NavLink>
        </div>
        <ProfileButton user={sessionUser} />
      </>
    );
    navClass = 'biggerNavButtonContainer'
  } else {
    sessionLinks = (
      <>
        <div className='loginButton'>
          <NavLink to="/login" style={{textDecoration: 'none'}}>Log In</NavLink>
        </div>
        <div className='signupButton' >
          <NavLink to="/signup" style={{textDecoration: 'none'}}>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className={navClass}>
      <div className='logo'>
        <NavLink exact to="/" className='homeButton' style={{textDecoration: 'none'}}>edmMe</NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
