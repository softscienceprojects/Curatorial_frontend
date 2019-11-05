import React from 'react'
import { Link } from 'react-router-dom'

import ExhibitionCard from './ExhibitionCard';


class UserDashboard extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        if (this.props.user) {
            this.setState({
                user: this.props.user
            })
        } else {
            this.props.history.push("/signin")
        }
    }


    render(){
        if (this.props.user === null) return null; // loading, not auth'd
        // this.props.history.push("/signin");
        // if this.props.match.params.id === this.props.user.id (this is you)
        return(
            <div>
                <h4>Welcome, {this.props.user.first_name}</h4>
                <br />
                {parseInt(this.props.match.params.id) === this.props.user.id ? <UserDashboardOptions user={this.props.user} /> : null }              
                {/* <p>followers/following</p> */}
                <p>{this.props.user.biography}</p>

                <h4>liked shows</h4>
                {this.props.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> )}

                <h4>curated shows</h4>
                {this.props.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> )}
                
                {/* <h4>feed</h4>  */}

            </div>
        )
    }
}

export default UserDashboard

// If it's you who is logged in:

const UserDashboardOptions = (props) => {
    
    return(
        <nav>
            <Link to={{pathname: `/users/${props.user.id}/edit`}}>Edit your account</Link>
        </nav>
    )
}