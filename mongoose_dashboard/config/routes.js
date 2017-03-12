var Snake = require('../models/Snake')

module.exports = function(app) {

app.get('/', function(req, res) {
  Snake.find({}, function(err, snakes) {
    if (err) { res.render('index', { errors: true, errorMsg: 'There was an error' }) }
    res.render('index', { errors: false, snakes: snakes })
  })
})

app.get('/snakes/new', function(req, res) {
  res.render('new_snake')
})

app.get('/snakes/:sid', function(req, res) {
  var snakeId = req.params.sid
  Snake.findOne({ _id: snakeId }, function(err, snake) {
    if (err || !snake) {
      res.redirect('/')
    }
    res.render('show_snake', { snake: snake })
  })
})

app.get('/snakes/edit/:sid', function(req, res) {
  var snakeId = req.params.sid
  Snake.findOne({ _id: snakeId }, function(err, snake) {
    if (err || !snake) {
      res.redirect('/')
    }
    res.render('edit_snake', { snake: snake })
  })
})

// POST METHODS

// from /snakes/new
app.post('/snakes', function(req, res) {
  if (!req.body.name || !req.body.location || !req.body.blurb) {
    res.render('new_snake', { errors: true, errorMsg: 'Please fill out the form completely' })
  }
  var newSnake = new Snake()
  newSnake.name = req.body.name
  newSnake.location = req.body.location
  newSnake.blurb = req.body.blurb
  newSnake.venomous = req.body.venomous
  newSnake.save(function(err) {
    if (!err) {
      res.redirect('/')
    }
  })
})

// from /snakes/edit/:sid
app.post('/snakes/:sid', function(req, res) {
  if (!req.body.name || !req.body.location || !req.body.blurb) {
    res.render('new_snake', { errors: true, errorMsg: 'Please fill out the form completely' })
  }
  Snake.update({ _id: req.params.sid }, req.body, function(err) {
    if (!err) {
      res.redirect('/')
    }
  })
})

app.post('/snakes/destroy/:sid', function(req, res) {
  Snake.remove({ _id: req.params.sid }, function(err) {
    if (!err) {
      res.redirect('/')
    }
  })
})

}
