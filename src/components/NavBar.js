import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({routes, user}) => {
    return (
        <nav>
            {routes.map(route=> (<Link key={route.path} to={route.path}>{route.title}</Link>))}
            {user && <h1>{user.first_name}</h1>}
        </nav>
    )
}

export default NavBar