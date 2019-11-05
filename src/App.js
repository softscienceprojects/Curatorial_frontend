import React from "react";
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import "./App.css";
import "./fonts/3A6A23_0_0.ttf";
import { Route, Switch } from "react-router-dom";
import paths from "./config/paths";
import NavBar from "./components/NavBar";
import API from "./adapters/API";

import Home from "./components/Home";
import Exhibitions from "./components/Exhibitions";
import ExhibitionShow from "./components/ExhibitionShow";
import ExhibitionNewForm from "./components/ExhibitionNewForm"

import Artworks from "./components/Artworks";
import ArtworkShow from "./components/ArtworkShow"
//import Search from "./components/Search";
import LoadingComponent from "./components/LoadingComponent"

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserErrorShowPage from "./pages/UserErrorShowPage"
import Users from "./components/Users";
import UserDashboard from "./components/UserDashboard";
import UserEditForm from "./components/UserEditForm"

//import Footer from "./components/Footer"
//import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  state = {
    user: null,
    validating: true, 
    hasError: false
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
      this.setState({ validating: false });
      if (user.errors) {
        //console.error(user.errors);
        //this.props.history.push("/signin");
      } else {
        this.setState({ user });
      }
    });
  }       

  userCreatedNewExhibition = (response) => {
    this.setState({
      user: {
        ...this.state.user,
        exhibitions: [...this.state.user.exhibitions, response],
    }
    })
  }

  removeExhibitionsFromUser = response => {
    this.setState({
      user: {
        ...this.state.user,
        exhibitions: this.state.user.exhibitions.filter(exhibition => exhibition.id !== response.id)
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
    // if (this.state.validating) return <div className="loader">Curatorial</div>;
    if (this.state.validating) return <LoadingComponent />;

    return (
      //<ErrorBoundary>
      <div className="App">
   
           <NavBar user={this.state.user} signin={this.signin} logout={this.logout} />
           {/* {!!this.state.hasError ? "There's an error" : null} */}
        
      <Switch>
      <Route
          exact
          path={paths.ROOT}
          component={routerProps => <Home {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={paths.EXHIBITIONS}
          component={routerProps => <Exhibitions {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={`${paths.EXHIBITIONS}/:id`}
          component={routerProps => <ExhibitionShow {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} userAddExhibitionLike={this.userAddExhibitionLike} userRemoveExhibitionLike={this.userRemoveExhibitionLike} removeArtworkFromExhibition={this.removeArtworkFromExhibition} />}
        />
        <Route
          exact
          path="/newexhibition"
          render={routerProps => <ExhibitionNewForm {...routerProps} userCreatedNewExhibition={this.userCreatedNewExhibition} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={`${paths.EXHIBITIONS}/:id/edit`}
          render={routerProps => <ExhibitionNewForm {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} removeExhibitionsFromUser={this.removeExhibitionsFromUser} />}
        />
        <Route
          exact
          path={paths.EXPLORE}
          component={routerProps => <Artworks {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
          <Route
          exact
          path={`${paths.EXPLORE}/:id`}
          render={routerProps => <ArtworkShow {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        {/* <Route
          exact
          path={paths.SEARCH}
          component={routerProps => <Search {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} />}
        /> */}
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
        <Route
          exact
          path={paths.USERS}
          component={routerProps => <Users {...routerProps} user={this.state.user} logout={this.logout} />}
        />
       <Route
          exact
          path={`${paths.USERS}/:id`}
          render={routerProps => <UserDashboard {...routerProps} user={this.state.user} logout={this.logout} />}
        />
        <Route
          exact
          path={`${paths.USERS}/:id/edit`}
          render={routerProps => <UserEditForm {...routerProps} user={this.state.user} signin={this.signin} logout={this.logout} userEditAccountParams={this.userEditAccountParams} />}
        />
        <Route
          exact
          path={`${paths.USERS}/error`}
          render={routerProps => <UserErrorShowPage {...routerProps} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={paths.LOGOUT}
          component={()=> this.logout()}
        />
      </Switch>

      {/* <Footer /> */}
     
      </div>
     // </ErrorBoundary>
    );
  }
}


// path={route.path}
//             component={routerProps =>
//               route.component ? (
//                 <route.component
//                   {...routerProps}
//                   signin={this.signin}
//                   logout={this.logout}
//                   user={this.state.user}
//                 />

export default App;
