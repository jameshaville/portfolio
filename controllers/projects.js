console.log('loading project controller');
var Project = require('mongoose').model('Project');

module.exports.list = function(req,res){
  console.log('projects all');
  Project.find({},function(err,projects){
  if(err) res.send(err);
  res.json(projects);
  });	
}
