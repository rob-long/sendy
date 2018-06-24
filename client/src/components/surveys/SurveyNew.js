import React, { Component } from "react";
import SurveyForm from "./SurveyForm";

class SurveyNew extends Component {
  render() {
    return <SurveyForm {...this.props} />;
  }
}

export default SurveyNew;
