var Post = require('./models/Post')
var Comment = require('./models/Comment')

function routes(app) {

app.get('/', function(req, res) {
  Post.find({})
  .populate('comments')
  .exec(function(err, posts) {
    if (err) {
      console.log('there was an error!', err)
    }
    else {
      res.render('home', { posts: posts })
    }
  })
})

// add a new post
app.post('/', function(req, res) {
  var newPost = new Post()
  newPost.posted_by = req.body.name
  newPost.text = req.body.message
  newPost.save(function(err) {
    if (err) {
      console.log('There was an error!', err)
    }
    else {
      res.redirect('/')
    }
  })
})

// add a new comment
app.post('/posts/:pid', function(req, res) {
  Post.findOne({ _id: req.params.pid }, function(err, post) {
    if (err || !post) {
      console.log('something went wrong!', err, post)
    }
    else {
      var newComment = new Comment()
      newComment.posted_by = req.body.name
      newComment.text = req.body.message
      newComment._post = post._id
      newComment.save(function(err) {
        if (err) {
          console.log('there was an error!', err)
        }
        else {
          post.comments.push(newComment)
          post.save(function(err2) {
            if (err2) {
              console.log('there was an error!', err2)
            }
            else {
              res.redirect('/')
            }
          })
        }
      })
    }
  })
})

}

module.exports = routes
