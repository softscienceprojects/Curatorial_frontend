import React from 'react'
import API from '../adapters/API'


class Exhibitions extends React.Component {
    state = {
        exhibitions: []
    }
    componentDidMount() {
        API.getExhibitions().then(response => 
            this.setState( {exhibitions: response} )
        )
    }

    render() {
        return(
            <div>Exhibitions</div>
        )
    }
}

export default Exhibitions

