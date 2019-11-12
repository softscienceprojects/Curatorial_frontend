import React from "react";
import { NavLink, Link } from "react-router-dom";


const NavBar = ({ user }) => {
  //console.log(user === null)
  return (
    <>
    <nav className="desktop">
    {/* <button className="mobile-toggle-view" >❒❑</button> */}

      <div className="inner-nav">

      <Link to="/"><h1 id="nav-logo">Curatorial</h1></Link>
      </div>
      <div className="inner-nav">
      <NavLink className="nav-link"to="/explore">Explore</NavLink>&nbsp;
      <NavLink className="nav-link" to="/exhibitions">Exhibitions</NavLink>&nbsp;
      <NavLink className="nav-link" to="/search">Search</NavLink>&nbsp;
      {user && <NavLink className="nav-link" to={`/users/${user.id}`}>Dashboard</NavLink>}&nbsp;
      {user && <NavLink className="nav-link" to="/logout">Logout</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signin">Sign in</NavLink>}&nbsp;
      {!user && <NavLink className="nav-link" to="/signup">Sign up</NavLink>}
      </div>
    </nav>
    </>
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