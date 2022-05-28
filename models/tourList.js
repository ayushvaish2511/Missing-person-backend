const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },


  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);