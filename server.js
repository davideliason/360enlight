const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

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

mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('db connection established');

app.get('/api/users',(req,res,next)=> {
    res.json(data)
   });

app.post('/user/',(req,res) => {
    console.log(req.body.username);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(process.env.TEST);
    console.log(`server listening at ${PORT}`);
});
