import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AamzonApiService from "../services/amazon-api-service";
import TokenService from "../services/token-service";
import Context from "../Context/Context";

class Login extends Component {
  static contextType = Context;
  static defaultPorps = {
    history: { push: () => {} },
  };
  state = {
    email: "",
    password: "",
    error: null,
  };

  handleClickSignIn = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { email, password } = this.state;

    AamzonApiService.postLogin({
      user_email: email,
      password: password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        //console.log("Login successfully, userInfo:", res);
        this.context.setUser(res.user_info);
        //console.log("Login successfully:", this.props.history);
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  updateUserName = (newEmail) => {
    this.setState({ email: newEmail });
  };

  updateUserPassword = (newPassword) => {
    this.setState({ password: newPassword });
  };

  render() {
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="back_to_homepage"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>

          <form onSubmit={this.handleClickSignIn}>
            <h5>E-mail</h5>
            <input
              type="text"
              id="user_email"
              value={this.state.email}
              onChange={(e) => this.updateUserName(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              id="user_password"
              value={this.state.password}
              onChange={(e) => this.updateUserPassword(e.target.value)}
            />

            <button type="submit" className="login__signInButton">
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
