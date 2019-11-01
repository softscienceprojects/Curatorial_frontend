//import React from 'react'
import API from '../adapters/API'

const curatorialAuth = {
    isAuthenticated: false,
    authenticate() {
        API.validateUser().then(user=> {
        if (user.errors) {
          console.error(user.errors)
          this.props.history.push('/signin')
        } else {
            //curatorialAuth.isAuthenticated: true;
            this.setState({user});
        }
      })
    },
    signout() {
        API.logout()
        //curatorialAuth.isAuthenticated = false;
        this.setState({user: null})
        this.props.history.push('/signin')
    }
}




export default curatorialAuth