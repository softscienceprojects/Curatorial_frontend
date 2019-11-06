import React from "react";
import API from "../adapters/API";
import { Link } from "react-router-dom";
import CloseWindowButton from "../components/NavButtonCloseWindow";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    hasError: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    API.signup({
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }).then(user => this.props.signin(user));
  };

  frontEndValidation = () => {
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.password_confirmation === "" ||
      this.state.password !== this.state.password_confirmation
    )
      return false;
    else return true;
  };

  render() {
    const isEnabled = this.frontEndValidation(); //this.state.email !== ''
    return (
      <div className="signup">
        <CloseWindowButton history={this.props.history} />

        <h1 id="logo">Sign Up</h1>

        {!!this.state.hasError ? "There's an error" : null}
        {this.state.email === "" ? "Please enter your email" : null}
        {this.state.password !== this.state.password_confirmation
          ? "Passwords must match"
          : null}
          
        <form onSubmit={this.submitForm}>
          <p>
            <label>
              Email:{" "}
              <input
                type="email"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Password:{" "}
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Password confirmation:{" "}
              <input
                type="password"
                placeholder="confirm your password"
                name="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <input type="submit" value="join now" disabled={!isEnabled} />
        </form>

        <br />
      

        <br />
        <br />
        <h4>Already have an account?</h4>
        <Link to={location => ({ ...location, pathname: "/signin" })}>
          Sign in instead
        </Link>
      </div>
    );
  }
}

export default SignUp;
