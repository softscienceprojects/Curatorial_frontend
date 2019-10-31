import React from 'react'
import API from '../adapters/API'

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = event => {
        event.preventDefault()
        API.signup({email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation})
        .then(user=> this.props.signin(user))
    }

    render() {
        return(
           <div><h4>Sign UP</h4>
           <form onSubmit={this.submitForm}>
            <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <input type="password" placeholder="confirm your password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
            <input type="submit" value="join now" />
           </form>
           </div> 
        )
    }
}

export default SignUp