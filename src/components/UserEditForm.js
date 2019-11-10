import React from 'react'
import API from '../adapters/API'

class UserEditForm extends React.Component {
    state ={

    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        API.updateUser(
            {user: this.state}, this.props.user.id)
        .then(resp=> this.goToUpdatedAccount(resp))
    }

    goToUpdatedAccount = response => {
        this.props.userEditAccountParams(response)
        this.props.history.push(`/users/${response.id}`)
    }

    // frontEndValidation = () => {
    //     if (this.state.email  && this.state.email === '' || this.state.password === '' || this.state.password_confirmation === '' || this.state.password !== this.state.password_confirmation) return false
    //     else return true
    // }  

    render(){
        // const isEnabled = this.frontEndValidation() 
        return(
            <article>
                <button id="cancelEdit" onClick={()=>this.props.history.goBack()}>Cancel</button>
                <hr />
                <h4>Edit your account</h4>
                <form onSubmit={this.handleSubmit}>
                    <p><label>First name  <br /><input type="text" name="first_name" value={this.state.first_name} placeholder="first name" onChange={this.handleChange} /></label></p>
                    <p><label>Last name  <br /><input type="text" name="last_name" value={this.state.last_name} placeholder="last name" onChange={this.handleChange} /></label></p>
                    <p><label>Biography  <br /><input type="textarea" rows="25" cols="50" name="biography" value={this.state.biography} placeholder="biography" onChange={this.handleChange} /></label></p>
                     <br /><br />
                     {/* <p><label>Email: <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} /></label></p>
                     <p><label>New password: <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} /></label></p>
                     <p><label>Confirm new password: <input type="password" name="password_confirmation" value={this.state.password_confirmation} placeholder="password confirmation" onChange={this.handleChange} /></label></p> */}

                    <input type="submit" value="submit" /> 
                </form>
                <hr />

                
            </article>
        )
    }

}

export default UserEditForm