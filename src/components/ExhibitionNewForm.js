import React from 'react'
import API from '../adapters/API'


class ExhibitionNewForm extends React.Component {
    state ={
        exhibition_id: null,
        title: '',
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

    updateOnClient = response => {
        this.props.history.push(`/exhibitions/${response.id}`)
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.exhibition_id === null) {
            API.newExhibition({user_id: this.props.user.id, title: this.state.title, summary: this.state.summary, description: this.state.description, public: this.state.public})
            .then(resp=> this.updateOnClient(resp)) 
        } else {
            API.editExhibition({user_id: this.props.user.id, title: this.state.title, summary: this.state.summary, description: this.state.description, public: this.state.public}, this.props.match.params.id)
            //.then(res=>console.log(res))
            .then(resp=> this.updateOnClient(resp))
        }
    }

    componentDidMount() {
        if (this.props.match.path.match(/(edit)/)) {
            API.getExhibition(this.props.match.params.id)
            .then(res=> this.setState({
                exhibition_id: this.props.match.params.id, 
                user_id: res.user_id, 
                title: res.title, 
                summary: res.summary, 
                description: res.description, 
                public: res.public
                })
            )
        } 

    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} />
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