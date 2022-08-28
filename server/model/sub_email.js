const mongoose = require('mongoose');

const SubEmailSchema = mongoose.Schema(
  {
    email: String,
  },
  { timestamps: true }
);

const SubEmailModel = mongoose.model('sub_email', SubEmailSchema);

module.exports = SubEmailModel;
