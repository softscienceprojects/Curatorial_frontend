import React from 'react'
import API from '../adapters/API'

class Search extends React.Component {
    state={
        searchTerm: '',
        results: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    noResults = (error) => {
        console.error(error)
    }

    handleSubmit = event => {
        event.preventDefault();
        
        API.search(this.state.searchTerm.toLowerCase())
        .then( results => this.setState({results: results["content"]["artworks"]}) )
        .catch(error=> this.noResults(error))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" placeholder="search for anything" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="search" />
                </form>
            </div>
        )
    }
}

export default Search

