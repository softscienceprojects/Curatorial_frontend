import React from "react";
import API from "../adapters/API"
 

class AddToShow extends React.Component {
    state = {
        exhibition: ''
    }


    handleChange = event => {
        this.setState({
            exhibition: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.exhibition !== "") {
        API.addArtToExhibition(this.state.exhibition, this.props.artwork.id)
        .then(res=>console.log(res))
        } else {
            alert("Please select a show")
        }
    }
    
    //artwork included in that array? if included, filter it out
    //artwork.exhibitions.includes? (exh)
    getUserExhibitions = () => {
        return (this.props.user.exhibitions.filter(exh => this.props.artwork.exhibitions.find(artExh => artExh.id !== exh.id)))
    }

    render() {
        console.log(this.getUserExhibitions())
        const exhibitions = this.getUserExhibitions()
        return(
            <>
            <h4>Add to a show</h4>
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select an Exhibition:</option>
                {exhibitions.map(exh => <option value={exh.id} key={exh.id}>{exh.title}</option>)}
                </select>
                <input type="submit" value="Add to show" />
            </form>
            </>
        )
    }
    
}

export default AddToShow