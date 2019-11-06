import React from 'react'
import API from '../adapters/API'
// import { deleteToConfirm } from './DeleteOptions'


class ExhibitionNewForm extends React.Component {
    state ={
        exhibition_id: null,
        title: '',
        summary: '',
        description: '',
        public: true,
        flashMessage: ''
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

    goToUpdatedExhibition = response => {
        if (!response.errors) {
            this.props.history.push(`/exhibitions/${response.id}`, {})
        } else {
            this.props.history.push(`/exhibitions/${response.id}/edit`, {...response})
        }
    }

    updateOnClient = resp => {
        this.props.userCreatedNewExhibition(resp)
        //this.props.history.push(`${this.props.history.go(-1)}`)
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.exhibition_id === null) {
            API.newExhibition({user_id: this.props.user.id, title: this.state.title, summary: this.state.summary, description: this.state.description, public: this.state.public})
            .then(resp=> this.updateOnClient(resp)) 
        } else {
            API.editExhibition({user_id: this.props.user.id, title: this.state.title, summary: this.state.summary, description: this.state.description, public: this.state.public}, this.props.match.params.id)
            .then(resp=> this.goToUpdatedExhibition(resp))
        }
    }

    deleteToConfirm = () => {
        API.deleteExhibition(this.state.exhibition_id)
        // .then(response=> this.props.history.push(`/users/${response.id}`))
        .then(response=> this.deleteOnClient(response))
    }

    deleteOnClient = response => {
        this.props.removeExhibitionsFromUser(response)
        this.props.history.push(`/users/${response.id}`)
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

    frontEndValidation = () => {
        if (this.state.summary.length > 200 ) return false
        else return true
    }

    render(){
       // const isEnabled = this.frontEndValidation()
        return(
            <div>
            {this.props.location.state !== undefined ? this.props.location.state.errors.map(error => <p>{error}</p>) : null}
            {/* {!!this.state.flashMessage ? "There's an error" : null} */}
                
                <form onSubmit={this.handleSubmit}>
                    <p><label>Title: <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} /></label></p>
                    <p><label>Summary: <input type="text" name="summary" value={this.state.summary} placeholder="summary" onChange={this.handleChange} /></label></p>
                    <p><label>Description: <input type="textfield" name="description" value={this.state.description} placeholder="description" onChange={this.handleChange} /></label></p>
                    <p><label>Make public?<input type="checkbox" name="summary" checked={this.state.public} onChange={this.makePublic} /></label></p>
                    <input type="submit" value="submit" />
                </form>

               {this.props.match.path.match(/(edit)/) ? <button className="danger" onClick={()=>this.deleteToConfirm()}>Delete Exhibition</button> : null}
            </div>
        )
    }

}

export default ExhibitionNewForm