import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reviewSurvey } from "../../actions";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderField({ label, type, name }) {
    return (
      <Field
        key={name}
        label={label}
        type={type}
        name={name}
        component={SurveyField}
      />
    );
  }

  onSubmit(values) {
    // history is added to our props by React-Router
    // we manipulate history in the callback to the addPost dispatch to redirect back to index page after new post added
    console.log(values);
    this.props.reviewSurvey(values);
    this.props.history.push("/surveys/review");
    //this.props.addPost(values, () => this.props.history.push("/"));
    return null;
  }

  // handleSubmit comes for free from redux-form!
  // https://redux-form.com/6.0.0-alpha.4/docs/api/props.md/
  render() {
    const inputs = [
      { label: "Survey Title", type: "text", name: "title" },
      { label: "Subject Line", type: "text", name: "subject" },
      { label: "Email Body", type: "text", name: "body" },
      { label: "Recipient List", type: "text", name: "emails" }
    ];
    const fields = inputs.map(input => this.renderField(input));

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        {fields}
        <button type="submit" className="btn right">
          Submit
          <i className="material-icons right">done</i>
        </button>&nbsp;
        <Link className="btn red" to="/surveys">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.subject) {
    errors.content = "Enter a subject!";
  }
  // if errors is empty, the form is fine to submit
  return errors;
}

// validate function runs everytime we submit the form
export default reduxForm({
  validate,
  form: "surveyForm" // a unique identifier for this form
})(
  connect(
    null,
    { reviewSurvey }
  )(SurveyForm)
);
