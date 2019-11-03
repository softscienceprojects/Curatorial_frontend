import React from 'react'
//import UserEditForm from './UserEditForm'
import { Link } from 'react-router-dom'

import ExhibitionCard from './ExhibitionCard';

class UserDashboard extends React.Component {

    componentDidMount() {
        
    }


    render(){
        if (this.props.user === null) return null; // loading, not auth'd
        // this.props.history.push("/signin");
        // if this.props.match.params.id === this.props.user.id (this is you)
        return(
            <div>
                User DASHBOARD
                <br />
                {JSON.stringify(this.props.match.params.id) === JSON.stringify(this.props.user.id) ? userDashboardOptions(this.props.user) : null }

               <h4> {this.props.user.first_name}</h4>
                <p>followers/following</p>

                <p>{this.props.user.biography}</p>

                <h4>liked shows</h4>

                <h4>curated shows</h4>
                {this.props.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> )}
                <h4>feed</h4>

                
            </div>
        )
    }

}

export default UserDashboard

// If it's you who is logged in:

const userDashboardOptions = (props) => {
    
    return(
        <nav>
            <Link to={{pathname: `/users/${props.id}/edit`}}>Edit your account</Link>
        </nav>
    )
}