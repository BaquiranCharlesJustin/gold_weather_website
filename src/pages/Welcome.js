import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop className="video-background">
          <source src="/vidclassmeyt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Welcome</h1>
          <button className="btn" id="loginButton">
            Log In
          </button>
          <button className="btn" id="signupButton">
            Sign Up
          </button>
        </div>

        <div className="login-form" id="loginFormContainer">
          <form id="loginForm">
            <h2>Login</h2>
            <input type="text" id="username" placeholder="Username" />
            <br />
            <br />
            <input type="password" id="password" placeholder="Password" />
            <br />
            <br />
            <button
              type="button"
              onclick="authenticate()"
              className="transparent-btn"
            >
              Login
            </button>
          </form>
        </div>

        <div id="registrationMessage" className="registration-message"></div>
        <div id="popupMessage" className="popup-message">
          <span id="popupContent"></span>
        </div>

        <div className="signup-form" id="signupFormContainer">
          <form id="signupForm">
            <h2>Sign Up</h2>
            <input type="text" id="signupUsername" placeholder="Username" />
            <br />
            <br />
            <input type="text" id="address" placeholder="Address" />
            <br />
            <br />
            <input type="date" id="birthdate" />
            <br />
            <br />
            <input type="text" id="contactInfo" placeholder="Contact Info" />
            <br />
            <br />
            <input type="email" id="email" placeholder="Email" />
            <br />
            <br />
            <input type="text" id="position" placeholder="Position" />
            <br />
            <br />
            <button
              type="button"
              onclick="submitSignUp()"
              className="transparent-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Welcome;
