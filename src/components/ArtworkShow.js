import React from 'react'
import API from '../adapters/API'

class ArtworkShow extends React.Component {
    state ={
        artwork: null,
        validating: true
    }
    
    componentDidMount() {
        API.getArtwork(this.props.match.params.id).then(response=> this.setState({artwork: response, validating: false}))
        console.log("mounted")
    }

    componentWillUnmount() {
        console.log("will unmount")
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
            
                <h4>Included in these shows:</h4>

                {/* handle no exhibitions otherwise it breaks */}
                {/* {this.state.artworks.exhibitions !== [] ? <p>{this.state.artwork.exhibitions[0].title}</p> : null} */}
                
                <h4>Add to a show</h4> 

            </div>

        )
    }
}

export default ArtworkShow