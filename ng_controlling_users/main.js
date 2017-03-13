
var app = angular.module('myApp', [])

app.controller('UsersController', function($scope) {
  $scope.allUsers = []
  $scope.newUser = {}
  $scope.hello = 'adadasd'

  $scope.addUser = function() {
    console.log('Adding user!')
    var timeNow = new Date()
    $scope.newUser.dateAdded = timeNow.toLocaleDateString()
    $scope.allUsers.push($scope.newUser)
    $scope.newUser = {}
  }

  $scope.deleteUser = function(index) {
    console.log('deleting user', index)
    if ($scope.allUsers[index]) {
      $scope.allUsers.splice(index, 1)
    }
    else {
      console.log('something went wrong')
    }
  }
})
