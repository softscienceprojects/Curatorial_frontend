import React from 'react'
import API from '../adapters/API'
import LoadingComponent from '../components/LoadingComponent';
import UserFollowUnfollowButton from '../components/UserFollowUnfollowButton'

import ExhibitionCard from '../components/ExhibitionCard';


class UserPublic extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        API.getUser(this.props.match.params.id).then(user => this.setState({ user: user }) )
    }

    render(){
        if (this.state.user === null) return <LoadingComponent />
        return(
            <article>
                <h4>{this.state.user.first_name}</h4>
                <p><strong>{this.state.user.followed_users.length}</strong> Following</p>
                <p><strong>{this.state.user.follower_users.length}</strong> Followers</p>

                <UserFollowUnfollowButton userToFollow={this.state.user} userSignedIn={this.props.user}/>

                <p>{this.state.user.biography}</p>

                <h4>{this.state.user.first_name}'s liked shows</h4>
                <hr />
                {this.state.user.exhibition_likes.length !== 0 ? this.state.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> ) : "No liked exhibitions"}


                <aside><h4>{this.state.user.first_name}'s curated shows</h4>
                <hr />
                {this.state.user.exhibitions.length !== 0 ? this.state.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> ) : "No curated exhibitions"}

                </aside>
            </article>
        )
    }

}

export default UserPublic