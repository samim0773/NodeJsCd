const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  name: { type: String, required: [true, "name is required"] },
  age: { type: Number, required: [true, "age is required"] },
  gender: { type: String, required: [true, "gender is required"] },
  email: { type: String, required: [true, "email is required"] },
  phone: { type: Number, required: [true, "phone is required"] },
  password: { type: String, required: [true, "password is required"] },
  birthDate: { type: Date, required: [true, "birthDate is required"] },
  image: String,
  bloodGroup: { type: String, required: [true, "bloodGroup is required"] },
  account_status: { type: String, required: [true, "account status is required"] },
  address: {
    address: { type: String, required: [true, "address is required"] },
    city: { type: String, required: [true, "city is required"] },
    postalCode: { type: Number, required: [true, "postalCode is required"] },
    state: { type: String, required: [true, "state is required"] },
    county: { type: String, required: [true, "county is required"] },
  },
  hospitals: [
    {
      name: { type: String, required: [true, "hospitals name is required"] },
      address: {type: String, required: [true, "hospitals address is required"] },
      city: { type: String, required: [true, "hospitals city is required"] },
      postalCode: { type: Number, required: [true, "hospitals postalCode is required"] },
      state: { type: String, required: [true, "hospitals state is required"] },
    },
  ],
});

exports.User = mongoose.model("User", userSchema);
