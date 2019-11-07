import React from 'react'
import API from '../adapters/API'
import ArtworkCard from '../components/ArtworkCard'
//import { Link } from 'react-router-dom'

import LoadingComponent from "../components/LoadingComponent"

class Artworks extends React.Component {
    state={
        artworks: [], 
        loading: true
    }

    componentDidMount() {
        API.getArtworks().then(res=> this.setState({artworks: res, loading: false}))
    }

    render() {
        if (this.state.loading) return <LoadingComponent />
        return(
            <>
            
                {this.state.artworks.map(artwork=> <ArtworkCard artwork={artwork} key={artwork.id} />)}
            </>
        )
    }
}

export default Artworks