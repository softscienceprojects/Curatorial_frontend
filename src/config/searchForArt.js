import React from 'react'
import API from '../adapters/API'

const searchForArt = (searchTerm, props) => {
    API.search(searchTerm.toLowerCase())
    //.then(results => console.log(props))
   .then( results => props.history.push(`/results/description=${searchTerm}`, {...results})
    ).catch(error=> error)
}

export default searchForArt