import React from 'react'
import API from '../adapters/API'
import LoadingComponent from '../components/LoadingComponent';
import UserFollowUnfollowButton from '../components/UserFollowUnfollowButton'
import { Link } from 'react-router-dom'

import ExhibitionCard from '../components/ExhibitionCard';


class UserPublic extends React.Component {
    state = {
        user: null,
        sameUser: false
    }

    componentDidMount() {
        API.getUser(this.props.match.params.id).then(user => this.setState({ user: user }) )
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.user !== this.props.user && this.props.user && this.props.user.id === this.state.user.id) {
    //         this.setState({
    //             sameUser: true
    //         })
    //     }
    // }

    userFollowed = (loggedInUser) => {
        this.setState({
            user: {
                ...this.state.user,
                follower_users: [...this.state.user.follower_users, loggedInUser]
            }
        })
    }

    userUnfollowed = (loggedInUser) => {
        this.setState({
            user: {
                ...this.state.user,
                follower_users: this.state.user.follower_users.filter(user => user.id !== loggedInUser.id)
            }
        })
    }


    render(){
        if (this.state.user === null) return <LoadingComponent />
        return(
            <article>
                <h1 id="logo">{this.state.user.first_name}</h1>
                <p><strong>{this.state.user.followed_users.length}</strong> Following</p>

                <p><strong>{this.state.user.follower_users.length}</strong> Followers</p>

                {!this.state.sameUser ? <UserFollowUnfollowButton 
                    userToFollow={this.state.user}
                    userFollowed={this.userFollowed} 
                    userUnfollowed={this.userUnfollowed}
                    userSignedIn={this.props.user} 
                    userAddFollow={this.props.userAddFollow} 
                    userRemoveFollow={this.props.userRemoveFollow}/> : null}

                <p>{this.state.user.biography}</p>
                <hr />
                <h4>{this.state.user.first_name}'s liked shows</h4>
                <aside>
                <div className="exhibition-container">
                {this.state.user.exhibition_likes.length !== 0 ? this.state.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> ) : "No liked exhibitions"}
                </div>
                </aside>
                <hr />
                <h4>{this.state.user.first_name}'s curated shows</h4>
                <aside>
                <div className="exhibition-container">
                {this.state.user.exhibitions.length !== 0 ? this.state.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> ) : "No curated exhibitions"}
                    </div>
                </aside>
            </article>
        )
    }

}

export default UserPublic
