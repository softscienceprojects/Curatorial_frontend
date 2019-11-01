import React from 'react'
//import UserEditForm from './UserEditForm'

class UserDashboard extends React.Component {
    state = {
        validating: true
    }

    componentDidMount() {
        console.log(this.props.user)
        // this.setState({
        //     validating: false
        // })
    }

    componentDidUpdate() {
        this.setState({
            validating: false
        })  
    }

    render(){
        if (this.state.validating) return <div className="loader">Curatorial</div>;
        return(
            <div>
                User DASHBOARD
                hello
                 {this.props.user.first_name}
            </div>
        )
    }

}

export default UserDashboard