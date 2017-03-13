
var app = angular.module('myApp', [])

app.controller('searchController', function($scope) {

  $scope.currentText = ''
  $scope.filterText = ''
  $scope.savedFoods = []

  $scope.addFood = function() {
    $scope.savedFoods.push($scope.currentText)
    $scope.currentText = ''
  }

  $scope.updateFilter = function() {
    // $scope.savedFoods.contains($scope.filterText)
  }
})
