
var peopleController = require('../controllers/people_controller')

function routes(app) {

  app.get('/', peopleController.index)
  app.get('/new/:name', peopleController.add)
  app.get('/remove/:name', peopleController.remove)
  app.get('/:name', peopleController.showSingle)

}

module.exports = routes
