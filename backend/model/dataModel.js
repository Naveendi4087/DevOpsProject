const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bookedDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  user: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
    default: '00:00'
  },
  to: {
    type: String,
    required: true,
    default: '00:00'
  },
});

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);
const User = mongoose.model("User", userSchema);

module.exports = {Service, User };
