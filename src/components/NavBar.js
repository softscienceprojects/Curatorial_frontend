import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({ user }) => {
  return (
    <nav>
      <h1 id="logo">Curatorial</h1>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/explore">Explore</NavLink>&nbsp;
      <NavLink to="/search">Search</NavLink>&nbsp;
      {user && <NavLink to={`/users/${user.id}`}>Dashboard</NavLink>}&nbsp;
      {user && <NavLink to="/logout">Log out</NavLink>}&nbsp;
      {!user && <NavLink to="/signin">Sign in</NavLink>}&nbsp;
      {!user && <NavLink to="/signup">Sign up</NavLink>}
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