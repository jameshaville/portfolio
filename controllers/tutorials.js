console.log('loading tutorial controller');
var Tutorial = require('mongoose').model('Tutorial');

module.exports.list = function(req,res){
  Tutorial.find({},{body:1},function(err,tutorials){
  if(err) res.send(err);
  res.json(tutorials);
  });	
}
