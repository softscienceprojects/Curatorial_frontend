import React from 'react'
//import UserEditForm from './UserEditForm'

class UserDashboard extends React.Component {

    render(){
        if (this.props.user === null) return null; // loading, not auth'd

        // if this.props.match.params.id === this.props.user.id (this is you)
        return(
            <div>
                User DASHBOARD
               <h4> {this.props.user.first_name}</h4>
                <p>followers/following</p>

                <p>{this.props.user.biography}</p>

            </div>
        )
    }

}

export default UserDashboard