import React from 'react'
import API from '../adapters/API'
import ArtworkCard from './ArtworkCard'
//import { Link } from 'react-router-dom'

class Artworks extends React.Component {
    state={
        artworks: []
    }

    componentDidMount() {
        API.getArtworks().then(res=> this.setState({artworks: res}))
    }

    render() {
        return(
            <div>Artworks : Explore Page
                {this.state.artworks.map(artwork=> <ArtworkCard artwork={artwork}  />)}
            </div>
        )
    }
}

export default Artworks