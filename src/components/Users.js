import React from 'react'
//import API from '../adapters/API'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import UserDashboard from "./UserDashboard"
import UserEditForm from "./UserEditForm"
import ExhibitionNewForm from './ExhibitionNewForm'

export default class Users extends React.Component {

    

    render() {
        return(
            <Router>
            <div>
                <nav>
                {/* <Link to="users/edit">edit your account</Link> */}
                </nav>
            </div>

            <Switch>
                <Route path="/edit">
                    <UserEditForm />
                </Route>
                <Route path="/exhibitions/new">
                   <ExhibitionNewForm user={this.props.user} />
                </Route>
            </Switch>
            </Router>
        )
    }
}

