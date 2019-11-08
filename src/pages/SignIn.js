import React from 'react'
import API from '../adapters/API'
import { Link } from 'react-router-dom'
import CloseWindowButton from "../components/NavButtonCloseWindow"

class SignIn extends React.Component {
    state={
        email: '',
        password: '',
        hasError: false
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = event => {
        event.preventDefault();
        API.signin({email: this.state.email, password: this.state.password})
        .then(user=> this.handleError(user))
    }

    handleError = (res) => {
        if (res !== undefined) {
          this.props.signin(res)
        } else {
          this.setState({
            hasError: true
          })
        }
      }

    frontEndValidation = () => {
        if (this.state.email === '' || this.state.password === '') return false
        else return true
    }

    render() {
        const isEnabled = this.frontEndValidation()
        return(
            <div className="signin">
            <CloseWindowButton history={this.props.history} />

            <div className="centerForm">
            <h1 id="logo">Sign in</h1>
            <p>{this.state.hasError ? "Those credentials didn't work, please try again" : null}</p>
            <form onSubmit={this.handleSubmit}>
                <p><label>Email: <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} /></label></p>
                <p><label>Password: <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} /></label></p>
                <input type="submit" value="Sign In" disabled={!isEnabled} />
            </form>
            <h4>No account?</h4>
            <Link to={location=> ({...location, pathname: "/signup"})} >Sign up now</Link>
            </div>
            </div>
        )
    }
}

export default SignIn