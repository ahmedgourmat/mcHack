const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  originalname : {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
},{
  timestamps : true
});
module.exports = mongoose.model("Document", DocumentSchema);