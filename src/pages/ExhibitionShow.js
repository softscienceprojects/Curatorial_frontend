import React from 'react'
import API from '../adapters/API'
import ArtworkCard from "../components/ArtworkCard"
import { Link } from 'react-router-dom'
import LikeUnlikeExhibition from '../components/ExhibitionLikeUnlikeButton'
import LoadingComponent from '../components/LoadingComponent'

import RemoveArtworkButton from "../components/RemoveArtworkButton"


class ExhibitionShow extends React.Component {

    state = {
        exhibition: null,
        validating: true
    }

    componentDidMount() {
        API.getExhibition(this.props.match.params.id).then(response=> this.setState({exhibition: response, validating: false}))
    }

    removeArtworkFromExhibition = artExhId => {
        API.removeArtFromExhibition(artExhId)
        .then(response => this.setState({
            exhibition: {
            ...this.state.exhibition,
            artworks: this.state.exhibition.artworks.filter(artwork => artwork.id !== response.artwork.id)}
        }))
      }


    render() {
        if (this.state.validating) return <LoadingComponent />;
        return(
        <article>
            
            <h4>{this.state.exhibition.summary}</h4>

            {this.state.exhibition.artworks.length > 0 ? this.state.exhibition.artworks.map(artwork => 
            <div className="exhibition">
            <ArtworkCard key={artwork.title} artwork={artwork} />
            <RemoveArtworkButton user={this.props.user} 
            key={artwork.id} 
            artwork={artwork}
            exhibition={this.state.exhibition}
            removeArtworkFromExhibition={this.removeArtworkFromExhibition}
            />
            </div> ) : <h1 id="logo">It's only the white cube</h1>}
            
            <hr />
            <h1 id="logo">{this.state.exhibition.title}</h1>
            <h4>Curated by <Link to={{pathname: `/users/public/${this.state.exhibition.user.id}`}} >{this.state.exhibition.user.first_name}</Link></h4>
            <p>{this.state.exhibition.description}</p>

            { this.props.user && this.props.user.id === this.state.exhibition.user.id 
                ? <Link to={{pathname: `/exhibitions/${this.state.exhibition.id}/edit`}} >Edit this exhibition</Link> 
                : null }
            <h4>{this.state.exhibition.exhibition_likes.length} {this.state.exhibition.exhibition_likes.length === 0 || this.state.exhibition.exhibition_likes.length > 1 ? "Curators like this exhibition" : "Curator likes this exhibition"}</h4>

            {this.props.user && this.props.user.id !== this.state.exhibition.user.id ? <LikeUnlikeExhibition user={this.props.user} 
            exhibition_id={this.state.exhibition.id} exhibition={this.state.exhibition} 
            addALike={this.props.userAddExhibitionLike} 
            // addALike={this.addALike} 
            removeALike={this.props.userRemoveExhibitionLike} 
            // removeALike={this.removeALike} 
            /> : null}
        </article>
        )
    }
}

export default ExhibitionShow



