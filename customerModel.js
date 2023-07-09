const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports.Customer = Customer;
