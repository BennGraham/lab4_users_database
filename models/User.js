const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  city: {
    type: String,
    required: true,
    validate: {
      validator: function (city) {
        return /^[A-Za-z\s]+$/.test(city);
      },
      message: "City name may only contain alphanumeric characters and spaces",
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function (website) {
        return /^https?:\/\/.+\..+/.test(website);
      },
      message: "Please enter a valid URL (http or https)",
    },
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: function (zip) {
        return /^\d{5}-\d{4}$/.test(zip);
      },
      message: "Zip code must be in format DDDDD-DDDD",
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (phone) {
        return /^\d-\d{3}-\d{3}-\d{4}$/.test(phone);
      },
      message: "Phone must be in format D-DDD-DDD-DDDD",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
