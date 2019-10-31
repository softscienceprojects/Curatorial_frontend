import React from 'react'


class ExhibitionNewForm extends React.Component {
    state ={
        user_id: null,
        summary: '',
        description: '',
        public: true,
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
                <form>
                    <input type="text" value="this.state.summary" />
                </form>
            </div>
        )
    }

}

export default ExhibitionNewForm