import React from "react";
import API from "../adapters/API";

class UserFollowUnfollowButton extends React.Component {
  state = {
    user_following_id: "",
    user_to_follow_id: "",
    relationship_id: "",
    followed: ""
  };

  FindRelationship = (userSignedIn, userToFollow) => {
    let found = userSignedIn.active_relationships.find(
      user => user.followed_id === userToFollow.id
    );
    if (!!found) {
      this.setState({
        user_following_id: userSignedIn.id,
        followed: true,
        relationship_id: found.id
      });
    } else {
      this.setState({
        user_following_id: userSignedIn.id,
        followed: false
      });
    }
  };

  handleAction = response => {
    this.props.userAddFollow(response); 
    this.setState({
      relationship_id: response.id,
      followed: true
    });
    this.props.userFollowed(this.props.userSignedIn);
  };

  postFollow = (relationship_data) => {
    API.followUser(relationship_data).then(r => this.handleAction(r));
  };

  postUnfollow = relationship_id => {
    API.unFollowUser(relationship_id)
      .then(res => this.props.userRemoveFollow(res))
      .then(() =>
        this.setState({
          relationship_id: "",
          followed: false
        })
      )
      .then(()=>this.props.userUnfollowed(this.props.userSignedIn));
  };

  componentDidMount() {
    if (this.props.userSignedIn) {
        this.FindRelationship(
        this.props.userSignedIn,
        this.props.userToFollow
    );
    }
    this.setState({
      user_to_follow_id: this.props.userToFollow.id
    });
  }

  componentDidUpdate(prevProps) {
      if (prevProps.userSignedIn !== this.props.userSignedIn) {
          this.FindRelationship(
          this.props.userSignedIn,
          this.props.userToFollow
          ); 
      }

  }

  render() {
    if (this.state.user_following_id === this.state.user_to_follow_id) return null
    return (
      <>
        {!!this.state.followed ? (
          <button
            className="likeExhibition"
            onClick={() => this.postUnfollow(this.state.relationship_id)}
          >
            ★ Unfollow this user
          </button>
        ) : (
          <button
            className="likeExhibition"
            onClick={() =>
              this.postFollow({
                follower_id: this.state.user_following_id,
                followed_id: this.state.user_to_follow_id
              })
            }
          >
            ☆ Follow this user
          </button>
        )}
      </>
    );
  }
}

export default UserFollowUnfollowButton;
