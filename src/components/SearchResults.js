import React from 'react'
import ArtworkCard from "./ArtworkCard"

class SearchResults extends React.Component {
    
    render() {
        if (this.props.results === []) return <div>There's nothing here</div>;
        return(
            <div>
                {this.props.results.map(artwork=> <ArtworkCard artwork={artwork}/> )}
                
            </div>
        )
    }

}

export default SearchResults