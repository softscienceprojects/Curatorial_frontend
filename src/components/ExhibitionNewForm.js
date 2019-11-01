import React from 'react'
import API from '../adapters/API'


class ExhibitionNewForm extends React.Component {
    state ={
        summary: '',
        description: '',
        public: true,
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    makePublic = (event) => {
        this.setState({
            public: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        API.newExhibition({user_id: this.props.user.id, summary: this.state.summary, description: this.state.description, public: this.state.public})
        .then(resp=> console.log(resp))
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="summary" value={this.state.summary} placeholder="summary" onChange={this.handleChange} />
                    <input type="textfield" name="description" value={this.state.description} placeholder="description" onChange={this.handleChange} />
                    <label>Make public?<input type="checkbox" name="summary" checked={this.state.public} onChange={this.makePublic} /></label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }

}

export default ExhibitionNewForm