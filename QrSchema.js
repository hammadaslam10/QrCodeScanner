const mongoose = require("mongoose");
const QrSchema = new mongoose.Schema({
  Recordid: {
    type: String,
    required: true,
  },
  QrCode: {
    type: String,
    required: true,
    unique: true,
  },
  Used: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("QrSchema", QrSchema);
