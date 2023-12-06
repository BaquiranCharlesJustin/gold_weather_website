import React, { Component } from "react";
import "./WelcomepageCSS.css";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false,
      showSignupForm: false,
      registrationMessage: "",
      popupMessage: "",
      username: "",
      password: "",
      signupUsername: "",
      address: "",
      birthdate: "",
      contactInfo: "",
      email: "",
      position: "",
    };
  }

  handleLoginButtonClick = () => {
    console.log("Login button clicked");
    this.setState({ showLoginForm: true, showSignupForm: false });
  };
  handleSignupButtonClick = () => {
    console.log("Signup button clicked");
    this.setState({ showLoginForm: false, showSignupForm: true });
  };

  authenticate = () => {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const validUsername = "Admin1";
    const validPassword = "pass123";

    if (
      enteredUsername === validUsername &&
      enteredPassword === validPassword
    ) {
      alert("Login successful!");
      // Redirect to a welcome page or dashboard upon successful login
      window.location.href = "profilepage.html"; // You might want to change the URL
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };
  submitSignUp = () => {
    //existing code for signup
    this.setState({
      registrationMessage: "Registration Complete \u2713", // Checkmark symbol
      showSignupForm: false,
      popupMessage: "Registration is complete!",
    });
  };
  render() {
    return (
      <div>
        <video autoPlay muted loop className="video-background">
          <source src="/vidclassmeyt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Welcome</h1>
          <button
            className="btn"
            id="loginButton"
            onClick={this.handleLoginButtonClick}
          >
            Log In
          </button>
          <button
            className="btn"
            id="signupButton"
            onClick={this.handleSignupButtonClick}
          >
            Sign Up
          </button>
        </div>
        {this.state.showLoginForm && (
          <div className="login-form" id="loginFormContainer">
            <form id="loginForm">
              <h2>Login</h2>
              <input
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <br />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <br />
              <br />
              <button
                type="button"
                onClick={this.authenticate}
                className="transparent-btn"
              >
                Login
              </button>
            </form>
          </div>
        )}

        <div id="registrationMessage" className="registration-message"></div>
        <div id="popupMessage" className="popup-message">
          <span id="popupContent"></span>
        </div>
        {this.state.showSignupForm && (
          <div className="signup-form" id="signupFormContainer">
            <form id="signupForm">
              <h2>Sign Up</h2>
              <input
                type="text"
                id="signupUsername"
                placeholder="Username"
                autoComplete="username"
                value={this.state.signupUsername}
                onChange={(e) =>
                  this.setState({ signupUsername: e.target.value })
                }
              />
              <br />
              <br />
              <input
                type="text"
                id="address"
                placeholder="Address"
                autoComplete="street-address"
                value={this.state.address}
                onChange={(e) => this.setState({ address: e.target.value })}
              />
              <br />
              <br />
              <input
                type="date"
                id="birthdate"
                autoComplete="bday"
                value={this.state.birthdate}
                onChange={(e) => this.setState({ birthdate: e.target.value })}
              />
              <br />
              <br />
              <input
                type="text"
                id="contactInfo"
                placeholder="Contact Info"
                autoComplete="tel"
                value={this.state.contactInfo}
                onChange={(e) => this.setState({ contactInfo: e.target.value })}
              />
              <br />
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <br />
              <br />
              <input
                type="text"
                id="position"
                placeholder="Position"
                autoComplete="organization-title"
                value={this.state.position}
                onChange={(e) => this.setState({ position: e.target.value })}
              />
              <br />
              <br />
              <button
                type="button"
                onClick="submitSignUp()"
                className="transparent-btn"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Welcome;
