import React from 'react'
import API from '../adapters/API'
import ExhibitionShow from './ExhibitionShow'
import ExhibitionNewForm from './ExhibitionNewForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../config/privateroute'

class Exhibitions extends React.Component {
    state = {
        exhibitions: []
    }
    componentDidMount() {
        API.getExhibitions().then(response => 
            this.setState( {exhibitions: response} )
        )
    }

    render() {
        return(
        <Router>
            <Switch>
                <Route path="/">
                    <ExhibitionShow />
                </Route>
                <PrivateRoute path="/new">
                    <ExhibitionNewForm />
                </PrivateRoute>
            </Switch> 
       </Router>
        )
    }
}

export default Exhibitions

