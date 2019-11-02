import React from 'react'
import API from '../adapters/API'
import { Link } from 'react-router-dom'

class ArtworkShow extends React.Component {
    state ={
        artwork: null,
        validating: true
    }
    
    componentDidMount() {
        API.getArtwork(this.props.match.params.id).then(response=> this.setState({artwork: response, validating: false}))
    }


    render() {
        if (this.state.artwork === null) return <div className="loader">Curatorial</div>;
        if (this.state.artwork)
        return(
            <div>
                Image will go here
                <h2>{this.state.artwork.title}</h2>
                <h4>by {this.state.artwork.artist}</h4>
                <p>{this.state.artwork.medium}</p>
                <p>{this.state.artwork.description}</p>
                <p>{this.state.artwork.collection} - {this.state.artwork.location}</p>
            
                <h4>Included in these shows:</h4>
                {this.state.artwork.exhibitions.length !== 0 ? this.state.artwork.exhibitions.map(exhibition => <p>{exhibition.title}</p>) : <p>This artwork has not yet appeared in any exhibitions</p>}
                
                <h4>Add to a show</h4> 


            </div>

        )
    }
}

export default ArtworkShow