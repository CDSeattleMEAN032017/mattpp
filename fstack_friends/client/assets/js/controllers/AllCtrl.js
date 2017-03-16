
angular.module('myApp')
.controller('AllCtrl',
['$scope', 'FriendFactory', function($scope, FriendFactory) {

  $scope.friends = []

  FriendFactory.index(function(err, friends) {
    $scope.friends = friends
  })

  $scope.deleteFriend = function(fid) {
    FriendFactory.delete(fid, function(err, friends) {
      $scope.friends = friends
    })
  }


}])
