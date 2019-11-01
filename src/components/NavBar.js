import React from "react";
import { Link } from "react-router-dom";


const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/exhibitions">Exhibitions</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/search">Search</Link>
      {user && <Link to="/users">Dashboard</Link>}
      {user && <Link to="/logout">Log out</Link>}
      {!user && <Link to="/signin">Sign in</Link>}
      {!user && <Link to="/signup">Sign up</Link>}
      {user ? <p>{user.first_name}</p> : null}
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