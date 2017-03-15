
var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/players', {
      templateUrl: 'partials/players.html',
      controller: 'PlayersCtrl'
    })
    .when('/teams', {
      templateUrl: 'partials/teams.html',
      controller: 'TeamsCtrl'
    })
    .when('/associations', {
      templateUrl: 'partials/associations.html',
      controller: 'AssociationsCtrl'
    })
    .otherwise({
      redirectTo: '/players'
    })
})

app.factory('PlayerFactory', [function() {
  var players = []
  var factory = {}
  var idCounter = 0

  // init
  factory.init = function(callback) {
    callback(players)
  }
  // add player
  factory.addPlayer = function(newPlayer, callback) {
    newPlayer.id = idCounter
    idCounter++
    players.push(newPlayer)
    callback(players)
  }
  // delete player
  factory.deletePlayer = function(playerIdx, callback) {
    for (var i = 0; i < players.length; i++) {
      if (players[i].id == playerIdx) {
        players.splice(i, 1)
      }
    }
    callback(players)
  }

  return factory
}])

app.factory('TeamFactory', [function() {
  var teams = []
  var factory = {}
  var idCounter = 0

  factory.init = function(callback) {
    callback(teams)
  }

  factory.addTeam = function(newTeam, callback) {
    newTeam.id = idCounter
    idCounter++
    teams.push(newTeam)
    callback(teams)
  }

  factory.deleteTeam = function(teamIdx, callback) {
    for (var i = 0; i < teams.length; i++) {
      if (teams[i].id == teamIdx) {
        teams.splice(i, 1)
      }
    }
    callback(teams)
  }

  return factory
}])

app.controller('PlayersCtrl',
['$scope', 'PlayerFactory', function($scope, PlayerFactory) {
  $scope.players = []
  $scope.newPlayer = {}

  PlayerFactory.init(function(players) {
    $scope.players = players
  })

  $scope.addPlayer = function() {
    PlayerFactory.addPlayer($scope.newPlayer, function(allPlayers) {
      $scope.newPlayer = {}
      $scope.players = allPlayers
    })
  }

  $scope.deletePlayer = function(playerIdx) {
    PlayerFactory.deletePlayer(playerIdx, function(allPlayers) {
      $scope.players = allPlayers
    })
  }
}])

app.controller('TeamsCtrl',
['$scope', 'TeamFactory', function($scope, TeamFactory) {
  $scope.teams = []
  $scope.newTeam = {}

  TeamFactory.init(function(teams) {
    $scope.teams = teams
  })

  $scope.addTeam = function() {
    console.log($scope.newTeam)
    TeamFactory.addTeam($scope.newTeam, function(allTeams) {
      $scope.newTeam = {}
      $scope.teams = allTeams
    })
  }

  $scope.deleteTeam = function(teamIdx) {
    TeamFactory.deleteTeam(teamIdx, function(allTeams) {
      $scope.teams = allTeams
    })
  }
}])

app.controller('AssociationsCtrl',
['$scope', 'PlayerFactory', 'TeamFactory', function($scope, PlayerFactory, TeamFactory) {
  $scope.players = []
  $scope.teams = []
  $scope.associations = []
  $scope.newAssociation = {}
  $scope.errors = []

  var assocCounter = 0

  PlayerFactory.init(function(allPlayers) {
    TeamFactory.init(function(allTeams) {
      $scope.players = allPlayers
      $scope.teams = allTeams
    })
  })

  $scope.addAssociation = function() {

    // get the index of player and team based on the association
    // if there is some sort of orderBy, might get wrong possition in arr
    var playerIdx = $scope.players.map(function(p) { return p.id })
      .indexOf(Number($scope.newAssociation.player))
    var teamIdx = $scope.teams.map(function(t) { return t.id })
      .indexOf(Number($scope.newAssociation.team))

    console.log(playerIdx, teamIdx)

    // if the playerIdx or teamIdx doesnt exist for some reason...
    if (playerIdx < 0 || teamIdx < 0) {
      console.log('There was an error.')
      $scope.errors.push('Either the player or team does not exist.')
      return
    }

    var newAssoc = {
      player: $scope.players[playerIdx],
      team: $scope.teams[teamIdx]
    }

    // check if the association is already added
    var alreadyAdded = false
    for (var i = 0; i < $scope.associations.length; i++) {
      if ($scope.associations[i].player.id == newAssoc.player.id && $scope.associations[i].team.id == newAssoc.team.id) {
        alreadyAdded = true
      }
    }

    // add assoc to assocs if it is not already there
    if (!alreadyAdded) {
      // give assoc an id
      newAssoc.id = assocCounter
      assocCounter++
      $scope.associations.push(newAssoc)
      $scope.newAssociation = {}
    }
    else {
      $scope.errors.push('You have already added that player to that team.')
    }
  }

  $scope.deleteAssociation = function(assocIdx) {
    console.log(assocIdx)
    for (var i = 0; i < $scope.associations.length; i++) {
      console.log($scope.associations[i].id, assocIdx)
      if ($scope.associations[i].id == assocIdx) {
        console.log('removing')
        $scope.associations.splice(i, 1)
      }
    }
  }

}])
