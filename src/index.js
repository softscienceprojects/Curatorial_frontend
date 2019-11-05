import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import ErrorBoundary from "./components/ErrorBoundary";
import paths from "./config/paths";
import Search from "./components/Search";


const curatorialHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={curatorialHistory} >
     <ErrorBoundary>
        <Route path="/" component={routerProps=> <App {...routerProps} />} />
        <Route
          path={paths.SEARCH}
          component={routerProps => <Search {...routerProps} />}
        />
    </ErrorBoundary>
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
