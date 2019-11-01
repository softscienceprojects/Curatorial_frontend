import React from 'react'
//import UserEditForm from './UserEditForm'

class UserDashboard extends React.Component {

    render(){
        if (this.props.user === null) return null; // loading, not auth'd

        // if this.props.match.params.id === this.props.user.id (this is you)
        return(
            <div>
                User DASHBOARD
                <br />user specific navigation

               <h4> {this.props.user.first_name}</h4>
                <p>followers/following</p>

                <p>{this.props.user.biography}</p>

                <h4>liked shows</h4>

                <h4>curated shows</h4>
                {this.props.user.exhibitions.map(exhibition=> <p>exhibibition.title</p> )}
                <h4>feed</h4>

                
            </div>
        )
    }

}

export default UserDashboard