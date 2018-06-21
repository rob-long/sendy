import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate } from "../actions";

class Landing extends Component {
  componentWillMount() {
    this.props.authenticate();
  }

  render() {
    const auth = this.props.auth;
    const googleId = auth.data ? auth.data.googleId : "none";
    return (
      <div className="App">
        {googleId}
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <a href="/auth/google">Sign in with google</a>
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
