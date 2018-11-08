const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./models/user.js');
const session = require('express-session')

require('dotenv').config();
const uri = process.env.MLAB;


var data = [
    {
        "id" : "001",
        "name" : "John",
        "text" : "hello"
    },
    {
        "id" : "002",
        "name" : "Bob",
        "text" : "coffee please"
    },
]

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
    session({
    secret: process.env.SECRET, 
    resave: false, //required
    saveUninitialized: false //required
    })
  )

  app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
  });

mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('db connection established');

app.get('/api/users',(req,res,next)=> {
    res.json(data)
   });

app.post('/user/', (req,res) => {
    console.log(req.body);
    const { username, password } = req.body;
  
    const newUser = new User({
      'username': username,
      'password': password
    })
  
    User.findOne( { 'username': username }, (err, userMatch) => {
        if (userMatch) {
        console.log("there is a user with that name")
              return res.json({
                  error: `Sorry, already a user with the username: ${username}`
              })
      } 
      else {
        newUser.save(function (err, newUser) {
          if(err) return console.error(er);
          console.log("new user saved to db");
        });
      }
    });
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(process.env.TEST);
    console.log(`server listening at ${PORT}`);
});
