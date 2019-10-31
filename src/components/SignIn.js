import React from 'react'
import API from '../adapters/API'

class SignIn extends React.Component {
    state={
        email: '',
        password: ''
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        API.signin({email: this.state.email, password: this.state.password})
        .then(user=> this.props.signin(user))
    }

    render() {
        return(
            <div><h1>SignIn Form</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Sign In" />
            </form>
            </div>
        )
    }
}

export default SignIn