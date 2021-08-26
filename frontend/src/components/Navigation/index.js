// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();

  const handleClick = ()=> {
    history.push('/myEvents');
    history.go(0);
  }

  let sessionLinks;
  let navClass = 'navButtonContainer'
  if (sessionUser) {
    navClass = 'biggerNavButtonContainer'
    sessionLinks = (
      <>
        <div className='userButtons'>
            <button className='myEvents' onClick={handleClick} style={{textDecoration: 'none'}}>My Events</button>
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
  } else {
    sessionLinks = (
      <>
        <div className="splash-buttons">
          <NavLink className='all-events-button' to="/" style={{textDecoration: 'none'}}>All Events</NavLink>
          <NavLink className='all-events-button' to="/signup" style={{textDecoration: 'none'}}>Add Events</NavLink>
        </div>
        <div className="splash-buttons">
          <NavLink className='all-events-button' to="/" style={{textDecoration: 'none'}}>Sign Up/Login</NavLink>
        </div>
        {/* <div className='loginButton'>
          <NavLink to="/login" style={{textDecoration: 'none'}}>Log In</NavLink>
        </div>
        <div className='signupButton' >
          <NavLink to="/signup" style={{textDecoration: 'none'}}>Sign Up</NavLink>
        </div> */}
      </>
    );
  }

  return (
    <div className={navClass}>
      <div className='logo'>
        <NavLink exact to="/" className='homeButton' style={{textDecoration: 'none'}}>edmME</NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
