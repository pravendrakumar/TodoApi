var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.get('/getTodos', (req, res) => {
  Todo.find().then((results) => {
    res.send(JSON.stringify(results));
  }, (e) => {
    console.log('Unable to fetch todos', e);
  })
  
});

app.post('/addTodo', (req, res) => {
 var todo = new Todo(req.body);
    todo.save().then((tod)=>{
      res.send(JSON.stringify(tod));
    },(exc)=>{
        console.log('Unable to save todo',exc);
    });

});

app.get('/getUsers', (req, res) => {
  User.find().then((results) => {
    res.send(JSON.stringify(results));
  }, (e) => {
    console.log('Unable to fetch users', e);
  })
  
});

app.post('/addUser', (req, res) => {
 var user = new User(req.body);
 user.save().then((tod)=>{
      res.send(JSON.stringify(tod));
    },(exc)=>{
        console.log('Unable to save user',exc);
    });

});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


app.listen(3000, () => {
  console.log('app started at http://localhost:3000');
});