import React from 'react'
import API from '../adapters/API'
import { Link } from 'react-router-dom'
import CloseWindowButton from "../components/NavButtonCloseWindow"

class SignIn extends React.Component {
    state={
        email: '',
        password: '',
        error: false
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

    frontEndValidation = () => {
        if (this.state.email === '' || this.state.password === '') return false
        else return true
    }

    render() {
        const isEnabled = this.frontEndValidation()
        return(
            <div>
            <CloseWindowButton history={this.props.history} />

            <h1>SignIn Form</h1>
            {!!this.state.error ? "Those credentials didn't work, please try again" : null}
            <form onSubmit={this.handleSubmit}>
                <p><label>Email: <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} /></label></p>
                <p><label>Password: <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} /></label></p>
                <input type="submit" value="Sign In" disabled={!isEnabled} />
            </form>
            <h4>No account?</h4>
            <Link to={location=> ({...location, pathname: "/signup"})} >Sign up now</Link>
            </div>
        )
    }
}

export default SignIn