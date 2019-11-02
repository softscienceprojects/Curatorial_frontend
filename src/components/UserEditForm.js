import React from 'react'
import API from '../adapters/API'

class UserEditForm extends React.Component {
    state ={
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        biography: ''
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        // API.updateUser({this.state}, this.props.user.id)
        // .then(resp=> goToUpdatedAccount(resp))
    }

    goToUpdatedAccount = response => {
        this.props.history.push(`/users/${response.id}`, {})
    }

    componentDidMount(){
        // this.setState({
        //     {this.props.user}
        // })
    }

    render(){
        return(
            <div>
                <h4>Edit your account</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="first_name" value={this.state.first_name} placeholder="first name" onChange={this.handleChange} />
                    <input type="text" name="last_name" value={this.state.last_name} placeholder="last name" onChange={this.handleChange} />
                    <input type="text" name="biography" value={this.state.biography} placeholder="biography" onChange={this.handleChange} />
                    
                    <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
                    <input type="password" name="password_confirmation" value={this.state.password_confirmation} placeholder="password confirmation" onChange={this.handleChange} />

                    <input type="submit" value="submit" />
                </form>

                <h4>Delete your account</h4>
                can't currently delete
            </div>
        )
    }

}

export default UserEditForm