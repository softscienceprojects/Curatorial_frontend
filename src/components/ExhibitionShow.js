import React from 'react'
import API from '../adapters/API'
import ArtworkCard from "./ArtworkCard"
import { Link } from 'react-router-dom'
import LikeUnlikeExhibition from './LikeUnlikeExhibition'
import LoadingComponent from './LoadingComponent'

class ExhibitionShow extends React.Component {

    state = {
        exhibition: null,
        validating: true
    }

    componentDidMount() {
        API.getExhibition(this.props.match.params.id).then(response=> this.setState({exhibition: response, validating: false}))
    }

  

    render() {
        if (this.state.validating) return <LoadingComponent />;
        //if (this.state.validating) return <div className="loader">Curatorial</div>;
        return(
        <div>
            { this.props.user && this.props.user.id === this.state.exhibition.user.id 
                ? <Link to={{pathname: `/exhibitions/${this.state.exhibition.id}/edit`}} >Edit this exhibition</Link> 
                : null }

            <h4>{this.state.exhibition.summary}</h4>

            {this.state.exhibition.artworks.length > 0 ? this.state.exhibition.artworks.map(artwork => <><ArtworkCard key={artwork.title} artwork={artwork} /><RemoveArtworkButton user={this.props.user} artwork={artwork.id} exhibition={this.state.exhibition}/></> ) : "Currently no artworks"}
            
            
            <h2>{this.state.exhibition.title}</h2>
            <h4>Curated by {this.state.exhibition.user.first_name}</h4>
            <p>{this.state.exhibition.description}</p>

            
            <h4>{this.state.exhibition.exhibition_likes.length} {this.state.exhibition.exhibition_likes.length === 0 || this.state.exhibition.exhibition_likes.length > 1 ? "Curators like this exhibition" : "Curator likes this exhibition"}</h4>

            {this.props.user ? <LikeUnlikeExhibition user={this.props.user} 
            exhibition_id={this.state.exhibition.id} exhibition={this.state.exhibition} 
            addALike={this.props.userAddExhibitionLike} 
            // addALike={this.addALike} 
            removeALike={this.props.userRemoveExhibitionLike} 
            // removeALike={this.removeALike} 
            /> : null}
        </div>
        )
    }
}

export default ExhibitionShow

const RemoveArtworkButton = (props) => {
    if (props.user && props.user.id === props.exhibition.user.id) {
       return(
        <button >Remove button</button>
     ) 
    } else {
        return null
    }
    // props.user.id === props.exhibition.user.id
}

