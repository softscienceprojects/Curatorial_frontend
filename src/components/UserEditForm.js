import React from 'react'


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
        // API.signin({email: this.state.email, password: this.state.password})
        // .then(user=> this.props.signin(user))
    }

    render(){
        return(
            <div>
                User Edit form
            </div>
        )
    }

}

export default UserEditForm