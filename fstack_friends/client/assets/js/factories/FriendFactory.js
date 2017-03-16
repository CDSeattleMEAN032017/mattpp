
angular.module('myApp')
.factory('FriendFactory', ['$http', function($http) {
  var friends = []
  var factory = {}

  // index
  factory.index = function(callback) {
    $http.get(`/friends`)
      .then(function(data) {
        console.log('friends factory', data)
        // was trying data.success, but data is the entire obj being
        // returned, and there is the data.data which contains friends, success, ...
        if (data.data.success) {
          callback(null, data.data.friends)
        }
      })
  }

  // show
  factory.show = function(fid, callback) {
    $http.get(`/friends/${fid}`)
      .then(function(data) {
        console.log('show friend')
        if (data.data.success) {
          callback(null, data.data.friend)
        }
      })
  }

  // create
  factory.create = function(newFriend, callback) {
    $http.post(`/friends`, newFriend)
      .then(function(data) {
        console.log('creating friend')
        if (data.data.success) {
          callback(null, 'Success!')
        }
      })
  }

  // update
  factory.update = function(fid, updatedFriend, callback) {
    $http.put(`/friends/${fid}`, updatedFriend)
      .then(function(data) {
        if (data.data.success) {
          console.log('updated friend!')
          callback(null, 'Success!')
        }
      })
  }

  // delete
  factory.delete = function(fid, callback) {
    $http.delete(`/friends/${fid}`)
      .then(function(data) {
        console.log(data)
        if (data.data.success) {
          callback(null, data.data.friends)
        }
      })
  }

  return factory
}])
