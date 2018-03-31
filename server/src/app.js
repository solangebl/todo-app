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
const List = require('../models/list')

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
  var todo = req.body.params
  var query = List.findOne({_id: req.body.list})
  query.exec()
    .then( (list) => {
      list.todos.push(todo)
      return list.save()
    })
    .then( (list) => {
      console.log(list)
      res.send(list)
    })
    .catch( (err) => {
      console.log(err)
    })
})

app.post('/todos/remove', (req, res) => {
  let query = List.findOne({_id: req.body.list})
  query.exec()
  .then( (list) => {
    list.todos.pull({_id: req.body.id})
    return list.save()
  })
  .then( (list) => {
    res.send(list)
  })
  .catch( (err) => {
    console.log(err)
  })
})

app.get('/lists', (req, res) => {
  List.find().exec()
  .then( (lists) => {
    res.send(
      {
        lists: lists
      }
    )
})
  .catch( (err) => {
    console.log(err)
  })
})

app.get('/list/:listId', (req, res) => {
  let id = req.params.listId
  List.findOne({_id: id}).exec()
  .then( (list) => {
    res.send(
        {list: list}
    )
})
  .catch( (err) => {
    console.log(err)
  })
})

app.post('/lists/add', (req, res) => {
  let name = req.body.name
  let newList = new List({title: name})
  newList.save()
    .then( (list) => {
      res.send(list)
    })
    .catch( (err) => {
      console.log(err)
    })
})

app.post('/lists/remove', (req, res) => {
  let listId = req.body.list
  let query = List.find().remove({_id: listId})
  query.exec()
    .then( (list) => {
      console.log(list)
      res.send(list)
    })
    .catch( (err) => {
      console.log(err)
    })
})

app.listen(process.env.PORT || 8081);