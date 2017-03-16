
angular.module('myApp')
.controller('ShowCtrl',
['$scope', 'FriendFactory', '$routeParams', function($scope, FriendFactory, $routeParams) {

  $scope.friend = {}

  FriendFactory.show($routeParams.fid, function(err, friend) {
    $scope.friend = friend
  })

}])
