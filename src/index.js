import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import ErrorBoundary from "./components/ErrorBoundary";
// import paths from "./config/paths";
// import Search from "./pages/Search";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";


const curatorialHistory = createBrowserHistory();

ReactDOM.render(
    <Router onUpdate={()=> window.scrollTo(0, 0)} history={curatorialHistory} >
     <ErrorBoundary>
       {/* <Route
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
        /> */}
        <Route path="/" component={routerProps=> <App {...routerProps} />} />
    </ErrorBoundary>
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
