import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import curatorialAuth from './Authenticated'
import API from '../adapters/API'



class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    API.validateUser().then(user => {
      this.setState({ validating: false });
      if (user.errors) {
        //console.error(user.errors);
        //this.props.history.push("/signin");
      } else {
        this.setState({ user });
      }
    });
  } 

    render() {
          return (
        <Route
          {...rest}
          render={({ location }) =>
              curatorialAuth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }

  }

  export default PrivateRoute