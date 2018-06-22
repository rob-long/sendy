const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: { type: String, trim: true },
  responded: { boolean: boolean, default: true }
});

mongoose.model("recipients", recipientSchema);

module.exports = recipientSchema;
