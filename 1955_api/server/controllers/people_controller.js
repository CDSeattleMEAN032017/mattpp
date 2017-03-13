
var People = require('../models/people')

var peopleController = {
  index: function(req, res) {
    People.find({}, function(err, people) {
      if (!err) {
        res.json(people)
      }
    })
  },

  showSingle: function(req, res) {
    var name = req.params.name
    if (!name) {
      res.json({ error: true, msg: 'There is no user with that name in the db.' })
    }
    else {
      People.findOne({ name }, function(err, person) {
        if (err || !person) {
          res.json({ error: true, msg: 'There is no one with that name in the db.' })
        }
        else {
          res.json({ error: false, person: person })
        }
      })
    }
  },

  add: function(req, res) {
    var name = req.params.name
    if (!name) {
      res.json({ error: true, msg: 'Please pass a name into the url.' })
    }
    if (name) {
      People.findOne({ name }, function(err, person) {
        if (err || person) {
          res.json({ error: true, msg: 'Someone with that name is already in the db.' })
        }
        else {
          var newPerson = new People({ name })
          newPerson.save(function(err) {
            if (!err) {
              res.json({ error: false, msg: `Added ${name}.` })
            }
          })
        }
      })
    }
  },

  remove: function(req, res) {
    var name = req.params.name
    if (!name) {
      res.json({ error: true, msg: 'Please pass a name into the url.' })
    }
    People.findOne({ name }, function(err, person) {
      if (!person) {
        res.json({ error: true, msg: 'There is no one with that name in the db.' })
      }
      else {
        People.remove({ name }, function(err) {
          if (!err) {
            res.json({ error: false, msg: `Added ${name}.` })
          }
        })
      }
    })
  }
}

module.exports = peopleController
