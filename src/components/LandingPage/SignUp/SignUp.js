import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <section className="signup">
        <h1>Sign Up to Create Your Personal Library</h1>
        <form className="signup-form">
          <div className="form-line">
            <label htmlFor="first-name">First Name: </label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div className="form-line">
            <label htmlFor="last-name">Last Name: </label>
            <input
              placeholder="Last Name"
              type="text"
              name="last-name"
              id="last-name"
            />
          </div>
          <div className="form-line">
            <label htmlFor="email">Email: </label>
            <input placeholder="Email" type="text" name="email" id="email" />
          </div>
          <div className="form-line">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="submit-btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;
