import React, { Component } from "react";
import { connect } from "react-redux";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

class Header extends Component {
  login() {
    const auth = this.props.auth;
    if (auth === null) {
      return;
    } else if (auth) {
      return <NavButton to="/api/logout">Logout</NavButton>;
    }
    return <NavButton to="/auth/google">Sign in with Google</NavButton>;
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Sendy
          </Link>
          <ul className="right">{this.login()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(Header);
