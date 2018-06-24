const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
const makeTemplate = require("./emailTemplate");

class Mailer {
  // deconstruct object - can be any object with subject and recipient
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(keys.sendGridKey);
    this.to = this.formatAddresses(recipients);
    this.from = "no-reply@sendy.com";
    this.subject = subject;
    this.text = content;
    this.html = makeTemplate(content);
  }

  getAll() {
    return Object.keys(this).reduce((acc, cur, i) => {
      acc[cur] = this[cur];
      return acc;
    }, {});
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }

  async send() {
    const msg = this.getAll();
    const response = await sgMail.sendMultiple(msg);
    return response;
  }
}

const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

module.exports = Mailer;
