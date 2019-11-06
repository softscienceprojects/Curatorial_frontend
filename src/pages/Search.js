import React from 'react'
//import API from '../adapters/API'
//import SearchResults from './SearchResults'
import CloseWindowButton from  '../components/NavButtonCloseWindow'
import  searchForArt from "../config/searchForArt"


class Search extends React.Component {
    state={
        searchTerm: '',
        results: [],
        searched: false,
    }

    componentDidMount() {
        if (this.props.location.search) {
        let term = this.props.location.search.split("=")[1].replace(/%20/gi, " ")
           this.setState({
           searchTerm: term
            }) 
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    // noResults = (error) => {
    //     console.error(error)
    //     this.setState({searchTerm: "", results: []})
    // }


    handleSubmit = event => {
        event.preventDefault();
        searchForArt(this.state.searchTerm, this.props)
    }

    // searchForArt = searchTerm => {
    //     API.search(searchTerm.toLowerCase())
    //     .then( results => this.props.history.push(`/results/description=${this.state.searchTerm}`, {...results})
    //     ).catch(error=> error)
    // }



    render() {
        return(
            <div className="search">
                <CloseWindowButton history={this.props.history} />
                <h1 id="logo">Search for anything</h1> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" placeholder="search for anything" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="search" />
                </form>

            {/* <SearchResults results={this.state.results} /> */}
            {/* <Route 
            <Redirect
            to={{
              pathname: `/search?description=${this.state.searchTerm}`
              state: { from: location }
            }}
          /> /> */}

            </div>
        )
    }
}

export default Search

