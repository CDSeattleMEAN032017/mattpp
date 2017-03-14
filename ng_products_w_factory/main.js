
var app = angular.module('productsApp', [])

// function sortArr(order, arr) {
//   return arr.sort(function(a, b) {
//     if (a < b) {
//       return order == 'desc' ? -1 : 1
//     }
//     else if (a > b) {
//       return order == 'desc' ? 1 : -1
//     }
//     else {
//       return 0
//     }
//   })
// }

app.factory('productsFactory', ['$http', function($http) {
  var products = []
  var factory = {}
  var currentId = 0

  factory.getProducts = function(callback) {
    callback(products)
  }

  factory.addProduct = function(newProd, callback) {
    if (!newProd.name) {
      newProd.name = 'No Name...?'
    }
    newProd.id = currentId
    currentId++
    products.push(newProd)
    callback(products)
  }

  return factory
}])

app.controller('productsCtrl', ['$scope', 'productsFactory', function($scope, productsFactory) {

  $scope.products = []
  $scope.newProd = {}
  $scope.reverse = false

  productsFactory.getProducts(function(prods) {
    $scope.products = prods
  })

  $scope.addProduct = function() {
    productsFactory.addProduct($scope.newProd, function(newProds) {
      $scope.products = newProds
      $scope.newProd = {}
    })
  }

  $scope.changeOrder = function() {
    $scope.reverse = !$scope.reverse
  }

  $scope.deleteProduct = function(idx) {
    // idx will be { id: idx, ... } ( not track by $index )
    if ($scope.products[idx]) {
      $scope.products.splice(idx, 1)
    }
  }

}])
