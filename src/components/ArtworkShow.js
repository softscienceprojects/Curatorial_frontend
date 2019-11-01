import React from 'react'
import API from '../adapters/API'

class ArtworkShow extends React.Component {
    state ={
        artwork: null,
        validating: true
    }
    
    componentDidMount() {
        API.getArtwork(this.props.match.params.id).then(response=> this.setState({artwork: response, validating: false}))
    }


    render() {
        if (this.state.validating) return <div className="loader">Curatorial</div>;
        return(
            <div>
                Image will go here
                <h2>{this.state.artwork.title}</h2>
                <h4>by {this.state.artwork.artist}</h4>
                <p>{this.state.artwork.medium}</p>
                <p>{this.state.artwork.description}</p>
                <p>{this.state.artwork.collection} - {this.state.artwork.location}</p>
            
                Included in these shows:
                <p>{this.state.artwork.exhibitions[0].title}</p>
            
            </div>

        )
    }
}

export default ArtworkShow