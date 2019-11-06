import React from 'react'
import ArtworkCard from "../components/ArtworkCard"

class SearchResults extends React.Component {
    
    render() {
        if (!this.props.results) return <div><h1>Search for anything</h1></div>
        if (this.props.results.length === 0) return <div><h1>You're an original</h1> <h4>Nothing matches that search</h4></div>;
        return(
            <div>
                {this.props.results.map(artwork=> <ArtworkCard key={artwork.id} artwork={artwork}/> )}
            </div>
        )
    }

}

export default SearchResults