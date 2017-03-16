
angular.module('myApp')
.controller('NewCtrl',
['$scope', 'FriendFactory', '$location', function($scope, FriendFactory, $location) {

  $scope.newFriend = {}
  console.log($location)

  $scope.addFriend = function() {
    FriendFactory.create($scope.newFriend, function(err, msg) {
      $scope.newFriend = {}
    })
    // for some reason have to call it outside of the callback
    $location.url('/')
  }

}])
