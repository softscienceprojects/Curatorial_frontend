import React from "react";
import API from "../adapters/API"
import { Link } from "react-router-dom"
//import ExhibitionNewForm from "./ExhibitionNewForm";

class AddToShow extends React.Component {
    state = {
        exhibition: '',
    }


    handleChange = event => {
        this.setState({
            exhibition: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.exhibition !== "") {
        API.addArtToExhibition(this.props.artwork.id, this.state.exhibition)
        .then((resp)=> this.props.addToExhibitionMap(resp))
        } else {
            alert("Please select a show")
        }
    }


    //artwork included in that array? if included, filter it out
    //artwork.exhibitions.includes? (exh)
    getUserExhibitions = () => {
        if (this.props.artwork.exhibitions.length !== 0) {
           // return (this.props.user.exhibitions.filter(exh => this.props.artwork.exhibitions.map(ex => JSON.stringify(ex) === JSON.stringify(exh)))
            // return (this.props.user.exhibitions.filter(exh => this.props.artwork.exhibitions.find(artExh => artExh.id !== exh.id)))
           return this.props.user.exhibitions.filter(exh=> this.getArtworkCurrentExhibitions(exh))
        }
        else {
            return this.props.user.exhibitions
        }
    }

    getArtworkCurrentExhibitions = (userExhbition) => {
        return this.props.artwork.exhibitions.find(exh => exh.id !== userExhbition.id)
    }


    render() {
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
                {/* <Link to={location=> ({...location, pathname: "/newexhibition"})}>Or, create new exhibition </Link> */}

                <h4><Link to={location=> ({...location, pathname: "/newexhibition"})} addToExhibitionMap={this.props.addToExhibitionMap}>Or, create new exhibition </Link></h4>
            </>
        )
    }
    
}

export default AddToShow