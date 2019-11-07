import React from "react";
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import "./App.css";
import "./fonts/3A6A23_0_0.ttf";
import { Route } from "react-router-dom";
import paths from "./config/paths";
import API from "./adapters/API";

import LoadingComponent from "./components/LoadingComponent"

import Search from "./pages/Search";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


import NavFooterWrapper from "./wrappers/NavFooterWrapper"

//import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  state = {
    user: null,
    loading: false,
    results: []
  };

  signin = user => {
    try {
      this.setState({ user }, () => this.props.history.push(`/users/${user.id}`));
    } catch(error) {
      this.props.history.push("/signup")
    }
  };

  logout = () => {
    API.logout();
    this.setState({ user: null });
    this.props.history.push(paths.ROOT);
    return null
  };

  componentDidMount() {
    API.validateUser().then(user => {
      this.setState({ loading: false });
      if (user.errors) {
        //console.error(user.errors);
        //this.props.history.push("/signin");
      } else {
        this.setState({ user });
      }
    });
  }       

  userCreatedNewExhibition = (response) => {
    if (!response.errors) {
        this.setState({
        user: {
          ...this.state.user,
          exhibitions: [...this.state.user.exhibitions, response],
        }  
      })
      this.props.history.push(`${this.props.history.go(-1)}`)
    } else {
      this.props.history.push("/newexhibition", {...response})
    }
  }

  removeExhibitionsFromUser = response => {
    this.setState({
      user: {
        ...this.state.user,
        exhibitions: this.state.user.exhibitions.filter(exhibition => exhibition.id !== response.id),
        exhibition_likes: this.state.user.exhibition_likes.filter(exhibition => exhibition.exhibition_id !== response.id)
      }
    })
}

  userAddExhibitionLike = response => {
    this.setState({
      user: {
        ...this.state.user,
        exhibition_likes: [...this.state.user.exhibition_likes, response],
      }
    })
  }

  userRemoveExhibitionLike = response => {
    this.setState({
      user: {
        ...this.state.user,
        exhibition_likes: this.state.user.exhibition_likes.filter(exhibition => exhibition.id !== response.id)
      }
    })
  }

  userEditAccountParams = response => {
    this.setState({
      user: response
    })
  }


  render() {
    if (this.state.loading) return <LoadingComponent />;
    return (
      
      <div className="App">
        <Route
          path={paths.SEARCH}
          component={routerProps => <Search {...routerProps}  />}
        /> 
        <Route
          exact
          path={paths.SIGNIN}
          component={routerProps => <SignIn {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={paths.SIGNUP}
          component={routerProps => <SignUp {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <NavFooterWrapper history={this.props.history} 
                          user={this.state.user} 
                          userEditAccountParams={this.userEditAccountParams} 
                          userRemoveExhibitionLike={this.userRemoveExhibitionLike} 
                          userAddExhibitionLike={this.userAddExhibitionLike} 
                          removeExhibitionsFromUser={this.removeExhibitionsFromUser} 
                          userCreatedNewExhibition={this.userCreatedNewExhibition} 
                          logout={this.logout}>
      
        </NavFooterWrapper>
      </div>
    
    );
  }
}


export default App;
