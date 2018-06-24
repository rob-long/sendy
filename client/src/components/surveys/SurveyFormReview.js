import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SurveyFormReview extends Component {
  render() {
    const properties = Object.keys(this.props.survey).map(key => (
      <li key={key}>{this.props.survey[key]}</li>
    ));
    const back = <Link to="/surveys/new">Modify my survey</Link>;
    return (
      <div>
        {properties}
        <span>{back}</span>
      </div>
    );
  }
}

function mapStateToProps({ auth, survey }) {
  return { auth, survey };
}

export default connect(
  mapStateToProps,
  null
)(SurveyFormReview);
