import React from 'react'
import { Link } from 'react-router-dom'
//import UserEditForm from './UserEditForm'
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
                User DASHBOARD
                <br />
                {JSON.stringify(this.props.match.params.id) === JSON.stringify(this.props.user.id) ? userDashboardOptions(this.props.user) : null }

                {/* User Edit Form, comment back in if ready to finish: */}
                {/* <UserEditForm user={this.props.user} /> */}

               <h4> {this.props.user.first_name}</h4>
                {/* <p>followers/following</p> */}

                <p>{this.props.user.biography}</p>

                {/* Exhibition likes currently doesn't have link to exhibition from user */}
                <h4>liked shows</h4>
                {this.props.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> )}

                <h4>curated shows</h4>
                {this.props.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> )}
                
                {/* If followers/following
                <h4>feed</h4> */}

                
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