import React from 'react'
import API from '../adapters/API'

class ExhibitionShow extends React.Component {

    state = {
        exhibition: null,
        validating: true
    }

    componentDidMount() {
        API.getExhibition(this.props.match.params.id).then(response=> this.setState({exhibition: response, validating: false}))
    }

    render() {
        if (this.state.validating) return <div className="loader">Curatorial</div>;
        return(
        <div>
            <h4>{this.state.exhibition.summary}</h4>

            images here!
            
            <h2>{this.state.exhibition.title}</h2>
            <h4>Curated by {this.state.exhibition.user.first_name}</h4>
            <p>{this.state.exhibition.description}</p>

            Like show stuff
        
        </div>
        )
    }
}

export default ExhibitionShow

