import React from 'react';
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import './App.css';
import './fonts/3A6A23_0_0.ttf'
import { Route } from 'react-router-dom'
import { routes } from './config/routes'
import NavBar from './components/NavBar'
import API from './adapters/API';

const notFoundMessage = () => <h5>NOT FOUND</h5>

class App extends React.Component {
  state= {
    user: null
  }

  signin = user => {
    this.setState({user}, () => this.props.history.push('/users'))
  }

  logout = () => {
    API.logout()
    this.setState({user: null})
    this.props.history.push('/signin')
  }

  componentDidMount() {
    API.validateUser().then(user=> {
      if (user.errors) {
        console.error(user.errors)
        this.props.history.push('/signin')
      } else {
        this.setState({user})
      }
    })
}



  render() {
     return (
      <div className="App">
      <NavBar routes={routes} user={this.state.user} />
        {routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={routerProps =>
              route.component ? (
                <route.component
                  {...routerProps}
                  signin={this.signin}
                  logout={this.logout}
                />
              ) : (
                notFoundMessage()
              )
            }
          />
        ))}
    </div>
      );
  }
 
}

export default App;
