import React from 'react'
import API from '../adapters/API'
import ExhibitionPoster from '../components/ExhibitionPoster'


class Exhibitions extends React.Component {
    state = {
        exhibitions: []
    }
    componentDidMount() {
        API.getExhibitions().then(response => 
            this.setState( {exhibitions: response} )
        )
    }

    filterPublicExhibitions = () => {
        return this.state.exhibitions.filter(exhibition => !!exhibition.public )
    }

    filterExhibitionsWithArt = (exhibitions) => {
        return exhibitions.filter(exhibition => exhibition.artworks.length > 0)
    }

    render() {
        let publicExibitions = this.filterPublicExhibitions()
        return(
            <article>
            <div className="exhibition-container">
            {publicExibitions.map(exhibition=> <ExhibitionPoster exhibition={exhibition} key={exhibition.id} />)}
            </div>
            </article>
        )
    }
}

export default Exhibitions

