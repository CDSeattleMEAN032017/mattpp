
angular.module('myApp')
.controller('EditCtrl',
['$scope', 'FriendFactory', '$routeParams', '$location', function($scope, FriendFactory, $routeParams, $location) {

  $scope.friend = {}

  FriendFactory.show($routeParams.fid, function(err, friend) {
    $scope.friend = friend
    $scope.friend.bDay = new Date($scope.friend.bDay)
  })

  $scope.updateFriend = function() {
    FriendFactory.update($routeParams.fid, $scope.friend, function(err) {
      console.log('updated friend!!!') // maybe do something more here???
      $location.url('/')
    })
  }

}])
