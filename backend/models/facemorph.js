var mongoose = require("mongoose");

var facemorphSchema = mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model("Facemorph", facemorphSchema);
