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
            <div>Exhibitions
        {/* <Router>
            <Switch>
                <Route exact path="/:id" render={()=><ExhibitionShow /> }>
                    
                </Route>
            </Switch> 
       </Router> */}
       </div>
        )
    }
}

export default Exhibitions

