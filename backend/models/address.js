const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  state: {
    type: String,
  },
  district: {
    type: String,
  },
});

module.exports = mongoose.model("address", addressSchema);
