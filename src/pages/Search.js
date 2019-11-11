import React from 'react'
//import API from '../adapters/API'
//import SearchResults from './SearchResults'
import CloseWindowButton from  '../components/NavButtonCloseWindow'
import  searchForArt from "../config/searchForArt"
//import LoadingComponent from '../components/LoadingComponent'


class Search extends React.Component {
    state={
        searchTerm: '',
        results: [],
        searched: false,
    }

    componentDidMount() {
        // if (this.props.location.search) {
        // let term = this.props.location.search.split("=")[1].replace(/%20/gi, " ")
        //    this.setState({
        //    searchTerm: term
        //     }) 
        // }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        searchForArt(this.state.searchTerm, this.props)
        //return <LoadingComponent />
    }

    frontEndValidation = () => {
        if (this.state.searchTerm === '') return false
        else return true
    }

    render() {
        const isEnabled = this.frontEndValidation()
        return(
            <div className="search">
                <CloseWindowButton history={this.props.history} />

                <div className="centerForm">
                <h1 id="logo">Search for anything</h1> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" placeholder="search for anything" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="search" disabled={!isEnabled} />
                </form>
            </div>
   

            </div>
        )
    }
}

export default Search

