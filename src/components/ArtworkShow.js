import React from 'react'
import API from '../adapters/API'
import AddToShowDropdown from './AddToShowDropdown'
import ExhibitionCard from './ExhibitionCard'
import { Link } from 'react-router-dom'

class ArtworkShow extends React.Component {
    state ={
        artwork: null,
        validating: true, 
        message: ''
    }
    
    componentDidMount() {
        API.getArtwork(this.props.match.params.id).then(response=> this.setState({artwork: response, validating: false}))
    }

    addToExhibitionMap = (response) => {
        //use this when you have added the artwork to the show
        this.setState({
            artwork: {
                ...this.state.artwork,
                exhibitions: [...this.state.artwork.exhibitions, response.exhibition],
            }
        })
    }


    render() {
        if (this.state.artwork === null) return <div className="loader">Curatorial</div>;
        if (this.state.artwork)
        return(
            <div>
                <p>{this.state.artwork.contents.map(content=> <span className="tag">{content.description} </span> )}</p>
                <br />
                {/* Image will go here */}
                <img src={this.state.artwork.image_url} alt={this.state.artwork.title} className="responsive" />
                <h2>{this.state.artwork.title}</h2>
                <h4>by {this.state.artwork.artist}</h4>
                <p>{this.state.artwork.medium}</p>
                <p>{this.state.artwork.description}</p>
                <p>{this.state.artwork.collection} - {this.state.artwork.location}</p>
            
                <h4>Included in these shows:</h4>
                {this.state.artwork.exhibitions.length !== 0 ? this.state.artwork.exhibitions.map(exhibition => <ExhibitionCard key={exhibition.title} exhibition={exhibition}/>) : <p>This artwork has not yet appeared in any exhibitions</p>}
                
                {this.props.user ? <AddToShowDropdown user={this.props.user} key={this.state.artwork.title} artwork={this.state.artwork} addToExhibitionMap={this.addToExhibitionMap} /> : <Link to={location=> ({...location, pathname: "/signin"})}>Sign in to save</Link>}


            </div>

        )
    }
}

export default ArtworkShow