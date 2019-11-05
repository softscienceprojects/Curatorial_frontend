import React from 'react'


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.error(error, info);
      //this.props.history.push("/signin")
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
        <h1>Something went wrong.</h1>
          <p>I'm sorry. Let's try this again.</p>
          <p>Try refreshing the page and that may fix the problem.</p>
        </div>
        );
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary