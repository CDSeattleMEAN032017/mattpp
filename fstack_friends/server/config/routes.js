
var friends = require('../controllers/friends')

function routes(app) {

  app.get('/friends', friends.index) // get all friends
  app.get('/friends/:fid', friends.show) // get specific friend
  app.post('/friends', friends.create) // add new friend
  app.put('/friends/:fid', friends.update) // update friend
  app.delete('/friends/:fid', friends.delete) // delete friend

}

module.exports = routes
