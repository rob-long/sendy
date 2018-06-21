import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate } from "../actions";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

class Landing extends Component {
  componentWillMount() {
    this.props.authenticate();
  }

  login() {
    const auth = this.props.auth;
    const googleId = auth.data ? auth.data.googleId : 0;
    console.log(googleId);
    if (googleId) {
      return <button>{googleId}</button>;
    }
    return <NavButton to="/auth/google">Sign in with Google</NavButton>;

    //return <NavButton to="/auth/google">Sign in with Google</NavButton>;
    return <a href="/auth/google">Sign in with google</a>;
  }

  loggedIn() {
    return <div>hello</div>;
  }

  render() {
    return (
      <div className="header">
        <div className="pull-left">Sendy</div>
        <div className="pull-right">{this.login()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { authenticate }
)(Landing);
