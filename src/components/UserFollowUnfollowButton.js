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
    let found = userSignedIn.followed_users.find(
      user => user.id === userToFollow.id
    );
//     if (!!found) {
//       this.setState({
//         followed: true,
//         liked_id: found.id
//       });
//     } else {
//       this.setState({
//         liked: false
//       });
//     }
  };

//   multiFunction = response => {
//     this.props.addALike(response);
//     this.setState({
//       liked_id: response.id,
//       liked: true
//     });
//   };

//   postFollow = (exhibitionId, userId) => {
//     API.followUser(exhibitionId, userId).then(r => this.multiFunction(r));
//   };

//   postUnfollow = relationship_id => {
//     API.unFollowUser(relationship_id)
//       .then(res => this.props.removeALike(res))
//       .then(() =>
//         this.setState({
//           liked_id: "",
//           liked: false
//         })
//       );
//   };

  componentDidMount() {
      console.log(this.props)
    // this.FindRelationship(
    //   this.props.userSignedIn,
    //   this.props.userToFollow
    // );
//     this.setState({
//       exhibition_id: this.props.exhibition_id,
//       user_id: this.props.user.id
//     });
  }

  componentDidUpdate() {
      console.log(this.props)
  }

  render() {
    return (
      <>
        {/* {!!this.state.followed ? (
          <button
            className="likeExhibition"
            onClick={() => this.postUnlike(this.state.liked_id)}
          >
            ★ Unfollow this user
          </button>
        ) : (
          <button
            className="likeExhibition"
            onClick={() =>
              this.postLike({
                exhibition_id: this.state.exhibition_id,
                user_id: this.state.user_id
              })
            }
          >
            ☆ Follow this user
          </button>
        )} */}
      </>
    );
  }
}

export default UserFollowUnfollowButton;
