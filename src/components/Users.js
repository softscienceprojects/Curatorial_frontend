import React from 'react'
//import API from '../adapters/API'
import { Link } from 'react-router-dom'
import UserDashboard from "./UserDashboard"
import UserEditForm from "./UserEditForm"

export default class Users extends React.Component {

 
    render() {
        return(
            <div>
                <nav><Link to="/users/:id/edit">edit your account</Link></nav>
            </div>
        )
    }
}

