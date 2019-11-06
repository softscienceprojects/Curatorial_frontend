import React from 'react'
import ArtworkCard from "../components/ArtworkCard"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import NoResults from "../components/NoResults"

class SearchResults extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        // this.setState({
        //     results
        // })
    }

    render() {
        if (!this.props.results) return <div>You have to search</div>
        return(
            <div>
            <NavBar />
            
        {this.props.results.length === 0 ? <NoResults /> : this.props.results.map(artwork=> <ArtworkCard key={artwork.id} artwork={artwork}/> )}
            
            <Footer />
            </div>
        )
    }

}

export default SearchResults