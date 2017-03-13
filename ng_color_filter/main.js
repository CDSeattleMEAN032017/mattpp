
var app = angular.module('myApp', [])

app.controller('ColorsController', function($scope) {
  $scope.allColors = _colors
})
