var projects = require('../controllers/projects');

module.exports = function(app){
  //shortcut to app router obj
  app.route('/api/projects')
  .get(projects.list);
}
