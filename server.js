var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var favicon = require('serve-favicon');
//load models
require("fs").readdirSync("./models").forEach(function(file) {
  require("./models/" + file);
});
var tutorials = require('./routes/tutorials.js');
var projects = require('./routes/projects.js');

mongoose.connect('mongodb://localhost/mean-test');

var app = express();

app.use(bodyParser());
app.use(favicon(__dirname + '/public/img/jh.ico'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));

tutorials(app);
projects(app);

app.get('*', function(req,res){
  res.sendfile('index.html');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
