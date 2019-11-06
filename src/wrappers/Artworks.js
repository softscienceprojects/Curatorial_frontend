import React from 'react'
import API from '../adapters/API'
import ArtworkCard from '../components/ArtworkCard'
//import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

class Artworks extends React.Component {
    state={
        artworks: []
    }

    componentDidMount() {
        API.getArtworks().then(res=> this.setState({artworks: res}))
    }

    render() {
        return(
            <>
            <NavBar user={this.props.user} />
            Artworks : Explore Page
                {this.state.artworks.map(artwork=> <ArtworkCard artwork={artwork} key={artwork.id} />)}
            <Footer />
            </>
        )
    }
}

export default Artworks