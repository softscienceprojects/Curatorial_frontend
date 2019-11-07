import React from 'react'
import API from '../adapters/API'
import ExhibitionCard from '../components/ExhibitionCard'


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

    render() {
        let publicExibitions = this.filterPublicExhibitions()
        return(
            <>
            {publicExibitions.map(exhibition=> <ExhibitionCard exhibition={exhibition} key={exhibition.id} />)}
            </>
        )
    }
}

export default Exhibitions

