
var app = angular.module('app', [])

app.controller('divController', function($scope) {
  $scope.myName = 'Matt Pedersen'
  $scope.myFavoriteLanguage = 'Javascript'
  $scope.myFavoriteJSLibrary = 'Angular'
})
