import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({ user }) => {
  return (
    <nav>
      <h1 id="logo">Curatorial</h1>
      <NavLink className="nav-link" to="/">Home</NavLink>&nbsp;
      <NavLink className="nav-link"to="/explore">Explore</NavLink>&nbsp;
      <NavLink className="nav-link" to="/search">Search</NavLink>&nbsp;
      {user && <NavLink className="nav-link" to={`/users/${user.id}`}>Dashboard</NavLink>}&nbsp;
      {user && <NavLink className="nav-link" to="/logout">Log out</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signin">Sign in</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signup">Sign up</NavLink>}
    </nav>
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