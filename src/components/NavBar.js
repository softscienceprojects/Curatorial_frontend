import React from "react";
import { NavLink, Link } from "react-router-dom";


const NavBar = ({ user }) => {
  //console.log(user === null)
  return (
    <nav id="home-logo">
      <Link to="/"><h1 id="nav-logo">Curatorial</h1></Link>&nbsp;&nbsp;
      <nav>
      <NavLink className="nav-link"to="/explore">Explore</NavLink>&nbsp;
      <NavLink className="nav-link" to="/search">Search</NavLink>&nbsp;
      {user && <NavLink className="nav-link" to={`/users/${user.id}`}>Dashboard</NavLink>}&nbsp;
      {user && <NavLink className="nav-link" to="/logout">Log out</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signin">Sign in</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signup">Sign up</NavLink>}
    </nav></nav>
  );
};

export default NavBar;

// {
//   title: "Log out",
//   path: "/logout",
//   auth: true,
//   component: props => {
//     props.logout();
//     return null;
//   }