var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  description: String,
  author: String,
  date_created: { type: Date, default: Date.now },
  order: Number
});

var Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;