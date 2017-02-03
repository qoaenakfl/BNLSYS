var express = require('express');
var app = express();

app.listen(3000, function(req, res){
    console.log('Server Start');
});

app.get('/', function(req, res){
    res.send('Hello World');
});