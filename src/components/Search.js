import React from 'react'
import API from '../adapters/API'

class Search extends React.Component {
    state={
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        API.search(this.state.description.toLowerCase())
        .then(res=>console.log(res))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="description" placeholder="search for anything" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="search" />
                </form>
            </div>
        )
    }
}

export default Search

