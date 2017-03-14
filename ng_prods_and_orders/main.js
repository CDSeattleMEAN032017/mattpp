
var app = angular.module('myApp', [])

app.factory('ProductsFactory', [function($scope) {
  var products = []
  var factory = {}
  var idCounter = 0

  // get products
  factory.getProducts = function(callback) {
    callback(products)
  }

  // add product
  factory.addProduct = function(prod, callback) {
    prod.quantity = 50
    prod.id = idCounter
    idCounter++
    products.push(prod)
    callback(null, products)
  }

  // delete product
  factory.deleteProduct = function(idx, callback) {
    products.splice(idx, 1)
    callback(products)
  }

  // buy product
  factory.buyProduct = function(idx, callback) {
    if (products[idx].quantity > 0) {
      products[idx].quantity--
    }
    callback(products)
  }

  // order product

  return factory
}])

app.controller('ProductsCtrl', ['$scope', 'ProductsFactory', function($scope, ProductsFactory) {

  $scope.errors = []
  $scope.products = []
  $scope.newProd = {}

  ProductsFactory.getProducts(function(prods) {
    $scope.products = prods
  })

  $scope.addProduct = function() {
    // check for presence of data in form
    var errors = []
    if (!$scope.newProd.name) { errors.push('Please enter a name...') }
    if (!$scope.newProd.price) { errors.push('Please enter a price...') }

    if (errors && errors.length > 0) {
      $scope.errors = errors
    }
    else {
      $scope.errors = []
      ProductsFactory.addProduct($scope.newProd, function(errs, prods) {
        $scope.products = prods
        $scope.newProd = {}
      })
    }
  }

  $scope.deleteProduct = function(idx) {
    ProductsFactory.deleteProduct(idx, function(prods) {
      $scope.products = prods
    })
  }


}])

app.controller('OrdersCtrl', ['$scope', 'ProductsFactory', function($scope, ProductsFactory) {

  $scope.products = []

  ProductsFactory.getProducts(function(prods) {
    $scope.products = prods
  })

  $scope.buyProduct = function(idx) {
    ProductsFactory.buyProduct(idx, function(prods) {
      $scope.products = prods
    })
  }

}])
