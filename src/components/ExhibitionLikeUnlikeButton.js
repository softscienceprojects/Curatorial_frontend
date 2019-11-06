import React from "react";
import API from '../adapters/API'


class LikeUnlikeExhibition extends React.Component {

    state = {
        exhibition_id: '',
        user_id: '',
        liked_id: '',
        liked: ''
    }

    FindUserLike = (exhibition_likes, exhibitionId) => {
        let found = exhibition_likes.find(exh => exh.exhibition_id === exhibitionId)
        if (!!found) {
            this.setState({
                liked: true,
                liked_id: found.id
            })
        }
        else { 
            this.setState({
            liked: false
            })
        }
    }

    multiFunction = response => {
        this.props.addALike(response)
        this.setState({
            liked_id: response.id,
            liked: true
        })
    }
    
    postLike = (exhibitionId, userId) => {
        API.likeExhibition(exhibitionId, userId)
        .then(r=> this.multiFunction(r))
    }
    
    postUnlike = (id) => {
        API.unlikeExhibition(id)
        .then(res=> this.props.removeALike(res))
        .then(()=> this.setState({
            liked_id: "",
            liked: false
            })
        )
    }

    componentDidMount() {
        this.FindUserLike(this.props.user.exhibition_likes, this.props.exhibition_id)
        this.setState({
            exhibition_id: this.props.exhibition_id,
            user_id: this.props.user.id,
        })
    }

    render() {
        return(
        <>
        {!!this.state.liked 
        ? <button className="likeExhibition" onClick={() => this.postUnlike(this.state.liked_id)}>★ Unlike this exhibition</button> 
        : <button className="likeExhibition" onClick={()=> this.postLike({exhibition_id: this.state.exhibition_id, user_id: this.state.user_id})}>☆ Like this exhibition</button> }
        </>
    )
    }
    
};

export default LikeUnlikeExhibition;
