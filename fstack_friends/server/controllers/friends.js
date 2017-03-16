
var Friend = require('../models/friend')

module.exports = {

  // query db for all users
  index: function(req, res) {
    Friend.find({}, function(err, friends) {
      if (err || !friends) {
        console.log('something went wrong')
        res.json({ success: false, friends: null })
      } else {
        console.log(err, friends)
        res.json({ success: true, friends: friends })
      }
    })
  },

  // get single user
  show: function(req, res) {
    var fid = req.params.fid
    Friend.findOne({ _id: fid }, function(err, friend) {
      if (err || !friend) {
        console.log('something went wrong')
        res.json({ success: false, friend: null })
      } else {
        res.json({ success: true, friend })
      }
    })
  },

  // add new user
  create: function(req, res) {
    var rb = req.body
    var newFriend = new Friend(rb)
    newFriend.save(function(err) {
      if (err) {
        console.log('something went wrong')
        res.json({ success: false })
      } else {
        res.json({ success: true })
      }
    })
  },

  // update single user
  update: function(req, res) {
    var fid = req.params.fid
    var rb = req.body
    Friend.update({ _id: fid }, rb, function(err) {
      if (err) {
        console.log('something went wrong')
        res.json({ success: false })
      } else {
        res.json({ success: true })
      }
    })
  },

  // delete single user
  delete: function(req, res) {
    var fid = req.params.fid
    Friend.remove({ _id: fid }, function(err) {
      if (err) {
        console.log('something went wrong')
        res.json({ success: false })
      } else {

        Friend.find({}, function(err, friends) {
          if (!err && friends) {
            res.json({ success: true, friends: friends })
          }
        })
      }
    })
  }

}
