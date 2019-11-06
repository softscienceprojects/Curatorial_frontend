import React from 'react'
import ArtworkCard from "../components/ArtworkCard"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LoadingComponent from '../components/LoadingComponent'
import NoResults from "../components/NoResults"

class SearchResults extends React.Component {
    
    render() {
        return(
            <div>
                <NavBar />
                {!this.props.location ? <LoadingComponent /> : null }
                {this.props.location && this.props.location.state.errors ? <NoResults searchTerm={this.props.match.params.id} /> : null }
                {this.props.location && this.props.location.state.content ? this.props.location.state.content.artworks.map(artwork=> <ArtworkCard key={artwork.id} artwork={artwork}/> ) : null }
                <Footer />
            </div>
        )
    }

}

export default SearchResults