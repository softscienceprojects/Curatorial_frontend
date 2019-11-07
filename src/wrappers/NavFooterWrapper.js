import React from 'react'
import { Route, Switch } from "react-router-dom";

import paths from "../config/paths";

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import Home from "../pages/Home";
import Exhibitions from "./Exhibitions";
import ExhibitionShow from "../pages/ExhibitionShow";
import ExhibitionNewForm from "../components/ExhibitionNewForm"

import Artworks from "./Artworks";
import ArtworkShow from "../pages/ArtworkShow"
import SearchResults from "../pages/SearchResults"

import Users from "./Users";
import UserDashboard from "../pages/UserDashboard";
import UserEditForm from "../components/UserEditForm"

class NavFooterWrapper extends React.Component  {

  render() {
     return <div>
      <NavBar user={this.props.user}/>
      
      {this.props.children}
    
      <Switch>
      <Route
          exact
          path={paths.ROOT}
          component={routerProps => <Home {...routerProps} user={this.props.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={paths.EXHIBITIONS}
          component={routerProps => <Exhibitions {...routerProps} user={this.props.user} />}
        />
        <Route
          exact
          path={`${paths.EXHIBITIONS}/:id`}
          component={routerProps => <ExhibitionShow {...routerProps} user={this.props.user} userAddExhibitionLike={this.userAddExhibitionLike} userRemoveExhibitionLike={this.userRemoveExhibitionLike} removeArtworkFromExhibition={this.removeArtworkFromExhibition} />}
        />
        <Route
          exact
          path="/newexhibition"
          render={routerProps => <ExhibitionNewForm {...routerProps} userCreatedNewExhibition={this.userCreatedNewExhibition} user={this.state.user} signin={this.signin} logout={this.logout} />}
        />
        <Route
          exact
          path={`${paths.EXHIBITIONS}/:id/edit`}
          render={routerProps => <ExhibitionNewForm {...routerProps} user={this.props.user} signin={this.signin} logout={this.logout} removeExhibitionsFromUser={this.removeExhibitionsFromUser} />}
        />
        <Route
          exact
          path={paths.EXPLORE}
          component={routerProps => <Artworks {...routerProps} user={this.props.user}  />}
        />
          <Route
          exact
          path={`${paths.EXPLORE}/:id`}
          render={routerProps => <ArtworkShow {...routerProps} user={this.props.user} />}
        />
          <Route          
          path={`/results/description=:id`}
          component={routerProps => <SearchResults {...routerProps} user={this.props.user} />}
        />
        <Route
          exact
          path={paths.USERS}
          component={routerProps => <Users {...routerProps} user={this.props.user} />}
        />
       <Route
          exact
          path={`${paths.USERS}/:id`}
          render={routerProps => <UserDashboard {...routerProps} user={this.props.user} />}
        />
        <Route
          exact
          path={`${paths.USERS}/:id/edit`}
          render={routerProps => <UserEditForm {...routerProps} user={this.props.user} userEditAccountParams={this.props.userEditAccountParams} />}
        />
        <Route
          exact
          path={paths.LOGOUT}
          component={()=> this.logout()}
        />
      </Switch>

    <Footer />
  </div>;
  }
 
};

export default NavFooterWrapper;
