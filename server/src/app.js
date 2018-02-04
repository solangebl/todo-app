const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const Todo = require('../models/todo')

mongoose.connect(config.mongo.db)
  .catch(function(err){
    console.log(err)
  });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise
// Get the default connection
var db = mongoose.connection

app.get('/todos', (req, res) => {
  Todo.find().exec()
    .then( (todos) => {
      res.send(
        {
          items: todos
        }
      )
  })
    .catch( (err) => {
      console.log(err)
    })
})

app.post('/todos/add', (req, res) => {
  var description = req.body.description
  var newTodo = new Todo({description: description})
  newTodo.save()
    .then( (todo) => {
      res.send(todo)
    })
    .catch( (err) => {
      console.log(err)
    })
})

app.post('/todos/remove', (req, res) => {
  Todo.remove({_id: req.body.id}).exec()
    .then( () => {
      res.send({success: true})
    })
    .catch( (err) => {
      console.log(err)
    })
})
app.listen(process.env.PORT || 8081);