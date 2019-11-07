import React from 'react'
import ArtworkCard from "../components/ArtworkCard"

import LoadingComponent from '../components/LoadingComponent'
import NoResults from "../components/NoResults"

class SearchResults extends React.Component {
    
    render() {
        return(
            <article>
                
                {!this.props.location ? <LoadingComponent /> : null }
                {this.props.location && this.props.location.state.errors ? <NoResults searchTerm={this.props.match.params.id} /> : null }
                {this.props.location && this.props.location.state.content ? this.props.location.state.content.artworks.map(artwork=> <ArtworkCard {...this.props} searchTerm={this.props.match.params.id} key={artwork.id} artwork={artwork}/> ) : null }
            </article>
        )
    }

}

export default SearchResults