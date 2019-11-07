import React from 'react'
import API from '../adapters/API'
import ArtworkCard from '../components/ArtworkCard'
//import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
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
            {/* <NavBar user={this.props.user} /> */}
            
                {this.state.artworks.map(artwork=> <ArtworkCard artwork={artwork} key={artwork.id} />)}
            {/* <Footer /> */}
            </>
        )
    }
}

export default Artworks