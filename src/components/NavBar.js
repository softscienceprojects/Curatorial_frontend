import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({ user }) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/search">Search</NavLink>
      {user && <NavLink to={`/users/${user.id}`}>Dashboard</NavLink>}
      {user && <NavLink to="/logout">Log out</NavLink>}
      {!user && <NavLink to="/signin">Sign in</NavLink>}
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