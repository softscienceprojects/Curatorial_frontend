import React from 'react'
import API from '../adapters/API'
import ArtworkCard from '../components/ArtworkCard'
//import { Link } from 'react-router-dom'

import InfiniteScroll from 'react-infinite-scroll-component';

import LoadingComponent from "../components/LoadingComponent"

class Artworks extends React.Component {
    state={
        artworks: [], 
        loading: true
    }

    componentDidMount() {
        API.getArtworksCapped().then(res=> this.setState({artworks: res, loading: false}))
    }

    loader = () => {
        API.getArtworksCapped().then(res=> this.setState({
            artworks: this.state.artworks.concat(Array.from([...res])), 
            loading: false}))
    }

    render() {
        if (this.state.loading) return <LoadingComponent />
        return(
            <>
            {/* <InfiniteScroll dataLength={this.state.artworks.length} next={this.loader} refreshFunction={this.loader} hasMore={true} pullDownToRefresh loader={<h1 id="logo">Getting art</h1>}> */}
                {this.state.artworks.map(artwork=> <ArtworkCard artwork={artwork} key={artwork.id} />)}
            {/* </InfiniteScroll> */}
            </>
        )
    }
}

export default Artworks