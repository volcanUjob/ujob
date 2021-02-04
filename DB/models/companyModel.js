var mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  nameOfCompany: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  }
});


var companyModel = mongoose.model("Company",companySchema);
module.exports.companyModel = companyModel;