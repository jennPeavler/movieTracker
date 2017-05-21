import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = props => {

  let determineNav = () => {
    return props.name.name || props.name.id ?
      <div className="nav-bar">
        <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
        <NavLink className="nav-link center" activeClassName='selected' to={'/favorites'}> Favorites </NavLink>
        <NavLink className="nav-link" activeClassName='selected' to={'/logoff'}> Logoff ({props.userName.name}) </NavLink>
      </div> :
      <div>
        <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
        <NavLink className="nav-link center" activeClassName='selected' to={'/signup'}> Signup </NavLink>
        <NavLink className="nav-link" activeClassName='selected' to={'/login'}> Login </NavLink>
      </div>
  }
  return (
    <div>
      {determineNav()}
    </div>
  )
}
