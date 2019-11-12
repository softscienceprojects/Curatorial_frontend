import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from 'react-router-scroll-top'

import ErrorBoundary from "./components/ErrorBoundary";
// import paths from "./config/paths";
// import Search from "./pages/Search";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

const curatorialHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={curatorialHistory}>
          <ScrollToTop>
    <ErrorBoundary>
      <Route path="/" component={routerProps => <App {...routerProps} />} />
    </ErrorBoundary>      
    </ScrollToTop>

  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
