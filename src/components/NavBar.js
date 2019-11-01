import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({routes, user}) => {
    return (
        <nav>
            {routes.map(route=> (<Link key={route.path} to={route.path}>{route.title}</Link>))}
            NAVBAR: {user ? <p>{user.first_name}</p> : null}
        </nav>
    )
}

export default NavBar