import React from 'react'
//import API from '../adapters/API'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserEditForm from "../components/UserEditForm"
import ExhibitionNewForm from '../components/ExhibitionNewForm'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"

export default class Users extends React.Component {

    render() {
        return(
            <Router>
            <>
            {/* <NavBar user={this.props.user}  /> */}
                <nav>
                </nav>
            {/* <Footer /> */}
            </>

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

