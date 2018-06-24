const keys = require("../config/keys");

module.exports = content => {
  return `
  <html>
  <body>
  <div style="text-align: center">
    <h3>We need your feedback!</h3>
    <div>${content}</div>
    <div>
      <a href="${keys.domain}/api/surveys/thanks">Yes</a>
    </div>
    <div>
      <a href="${keys.domain}/api/surveys/thanks">No</a>
    </div>
  </div>
  </body>
  `;
};
