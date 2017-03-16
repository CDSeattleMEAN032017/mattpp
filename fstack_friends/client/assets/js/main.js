
angular.module('myApp', ['ngRoute', 'ngMessages'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/allusers.html',
      controller: 'AllCtrl'
    })
    .when('/friends/new', {
      templateUrl: 'partials/new.html',
      controller: 'NewCtrl'
    })
    .when('/friends/:fid', {
      templateUrl: 'partials/show.html',
      controller: 'ShowCtrl'
    })
    .when('/friends/:fid/edit', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
