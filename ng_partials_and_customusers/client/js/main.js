
var app = angular.module('myApp', ['ngRoute'])

// ROUTES
app.config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'partials/customizeUsers.html',
      controller: 'CustomizeUsersCtrl',
      activetab: 'users'
    })
    .when('/list', {
      templateUrl: 'partials/userList.html',
      controller: 'UserListsCtrl',
      activetab: 'list'
    })
    .otherwise({
      redirectTo: '/'
    })
})

// FACTORIES
app.factory('UserFactory', [function() {
  var users = []
  var factory = {}
  var idCount = 0

  factory.init = function(callback) {
    callback(users)
  }

  factory.addUser = function(newUser, callback) {
    newUser.id = idCount
    idCount++
    users.push(newUser)
    callback(users)
  }

  factory.deleteUser = function(idx, callback) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == idx) {
        users.splice(i, 1)
      }
    }
    callback(users)
  }

  return factory
}])


// CONTROLLERS
app.controller('CustomizeUsersCtrl',
['$scope', 'UserFactory', '$route', '$location', function($scope, UserFactory, $route, $location) {

  $scope.users = []
  $scope.newUser = {}

  UserFactory.init(function(users) {
    $scope.users = users
  })

  $scope.addUser = function() {
    UserFactory.addUser($scope.newUser, function(users) {
      $scope.users = users
      $scope.newUser = {}
      $location.url('/list')
    })
  }

  $scope.deleteUser = function(idx) {
    UserFactory.deleteUser(idx, function(users) {
      $scope.users = users
      console.log($scope.users)
    })
  }

}])

app.controller('UserListsCtrl',
['$scope', 'UserFactory', '$route', function($scope, UserFactory, $route) {

  $scope.users = []

  UserFactory.init(function(users) {
    $scope.users = users
  })

}])
