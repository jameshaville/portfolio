var tutorials = require('../controllers/tutorials');

module.exports = function(app){
  //shortcut to app router obj
  app.route('/api/tutorials')
  .get(tutorials.list);
}
