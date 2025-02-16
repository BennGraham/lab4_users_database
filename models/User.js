const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  lat: String,
  long: String,
});

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  suite: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z\s]+$/.test(v);
      },
      message: "City name can only contain alphanumeric characters and spaces",
    },
  },
  zipcode: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{5}-\d{4}$/.test(v);
      },
      message: "Zipcode must be in format DDDDD-DDDD",
    },
  },
  geo: locationSchema,
});

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
  bs: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minLength: [4, "Username must contain at least 4 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      message: "Please enter a valid email address",
    },
  },
  address: {
    type: addressSchema,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: "Phone must be in format D-DDD-DDD-DDDD",
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\..+/.test(v);
      },
      message: "Please enter a valid URL (http or https)",
    },
  },
  company: {
    type: companySchema,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
