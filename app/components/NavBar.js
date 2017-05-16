import React from 'react';
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink activeClassName='selected' to={'/'}> Home </NavLink>
      <NavLink activeClassName='selected' to={'/favorites'}> Favorites </NavLink>
      <NavLink activeClassName='selected' to={'/login'}> Login </NavLink>
    </div>
  );
}
