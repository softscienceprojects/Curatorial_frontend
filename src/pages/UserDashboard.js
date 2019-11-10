import React from 'react'
import { Link } from 'react-router-dom'
import API from '../adapters/API'

import ExhibitionCard from '../components/ExhibitionCard';
//import LoadingComponent from '../components/LoadingComponent';

class UserDashboard extends React.Component {
    state = {
        user: null,
        isSelf: false,
        match: null
    }

    componentDidMount() {
            this.setState({
                match: JSON.parse(this.props.match.params.id)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.user && prevProps.user !== this.props.user && this.state.match === this.props.user.id) {
            this.setState({
                user: this.props.user,
                isSelf: true
            })
        } else if (this.props.user && prevProps.user !== this.props.user && this.state.match !== this.props.user.id) {
            API.getUser(this.state.match).then(user => this.setState({ user: user }) )
        //     this.props.history.push("/signin")
        }
    }
 
    render(){
        if (this.props.user === null) return null; // loading, not auth'd
        //if (this.state.user === null) return <LoadingComponent />
        // this.props.history.push("/signin");
        return(
            <article>
                <h1 id="logo">Welcome {this.props.user.first_name}</h1>
                <br />
                <UserDashboardOptions user={this.props.user} />

                {/* <p>followers/following</p> */}
                <p><strong>{this.props.user.followed_users.length}</strong> Following</p>
                <p><strong>{this.props.user.follower_users.length}</strong> Followers</p>

                <p>{this.props.user.biography}</p>

                <h4>my liked shows</h4>
                <hr />
                <div className="exhibition-container">
                {/* {this.props.user.exhibition_likes.length !== 0 ? this.props.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> ) : "You don't currently like any exhibitions"} */}
                {this.props.user.exhibition_likes.length !== 0 ? this.props.user.exhibition_likes.map(liked=> <ExhibitionCard exhibition={liked.exhibition} key={liked.exhibition.id} /> ) : "No liked exhibitions"}
                </div>
                <aside>
                <h4>my curated shows</h4>
                <hr />
                <div className="exhibition-container">
                {/* {this.props.user.exhibitions.length !== 0 ? this.props.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> ) : "You haven't curated any exhibitions"} */}
                {this.props.user.exhibitions.length !== 0 ? this.props.user.exhibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} /> ) : "No curated exhibitions"}
                </div></aside>

                <h4>my art world</h4>
                <hr />
                {this.props.user.followed_users.length > 0 ? <UserArtWorldFeed followed_users={this.props.user.followed_users} /> : <p>Follow users to see what's new</p>}

            </article>
        )
    }
}

export default UserDashboard

// If it's you who is logged in:

const UserDashboardOptions = (props) => {
    return(
        <>
            <Link to={{pathname: `/users/${props.user.id}/edit`}}>Edit your profile</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={{pathname: `/users/public/${props.user.id}`}}>See your public profile</Link>
        </>
    )
}

const UserArtWorldFeed = props => {

    return(
        <>
        {props.followed_users.map(user => <UserArtWorldCard user={user} />)}
        </>
    )
}

const UserArtWorldCard = props => {
    let lastExhibition = props.user.exhibitions[props.user.exhibitions.length-1]
    if (lastExhibition === undefined) return null
    return(
        <>
        <h4><Link to={{pathname: `/users/public/${props.user.id}`}} >{props.user.first_name}</Link> just curated <Link to={{pathname: `/exhibitions/${lastExhibition.id}`}} >{lastExhibition.title}</Link></h4>
        <p>{lastExhibition.summary}</p>
        <hr />
        </>
    )
}

