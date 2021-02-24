const mongoose = require("mongoose");
const { Schema } = mongoose;

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  photoURL: String,
});

module.exports = mongoose.model("child", childSchema);
