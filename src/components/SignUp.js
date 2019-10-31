import React from 'react'
import API from '../adapters/API'

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    submitForm = event => {
        event.preventDefault()
    }

    render() {
        return(
           <div><h4>Sign UP</h4>
           <form>
            <input type="email" placeholder="email" name="email" value={this.state.email} />
            <input type="password" placeholder="password" name="password" value={this.state.password} />
            <input type="password" placeholder="confirm your password" name="password_confirmation" value={this.state.password_confirmation} />
            <input type="submit">join now</input>
           </form>
           </div> 
        )
    }
}

export default SignUp