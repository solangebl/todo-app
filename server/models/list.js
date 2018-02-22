var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  title: String,
  todos: [
    {
      title: String,
      description: String,
      author: String,
      date_created: { type: Date, default: Date.now },
      order: Number
    }
  ]
});

var List = mongoose.model("List", ListSchema);
module.exports = List;