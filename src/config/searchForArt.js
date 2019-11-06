import React from 'react'
import API from '../adapters/API'

const searchForArt = (searchTerm, props) => {
    // if (this.props.location.search) {
    //     let term = this.props.location.search.split("=")[1].replace(/%20/gi, " ")
    //        this.setState({
    //        searchTerm: term
    //         }) 
    //     }
    console.log(props)
    API.search(searchTerm.toLowerCase())
   .then( results => props.history.push(`/results/description=${searchTerm}`, {...results})
    ).catch(error=> error)
}

export default searchForArt