import React from "react";
import API from "../adapters/API"
 

class AddToShow extends React.Component {
    state = {
        exhibition: ''
    }

    getUserExhibitions = () => {
    const exhibitions = [
        ...new Set(this.props.user.exhibitions.map(exh => exh.title))
    ]
    return exhibitions.sort();
    }

    handleChange = event => {
        this.setState({
            exhibition: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //
    }

    render() {
        return(
            <>
            <h4>Add to a show</h4>
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select an Exhibition:</option>
                {this.props.user.exhibitions.map(exh => <option value={exh.id} key={exh.id}>{exh.title}</option>)}
                </select>
                <input type="submit" value="Add to show" />
            </form>
            </>
        )
    }
    
}

export default AddToShow