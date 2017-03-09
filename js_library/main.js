// array manipulation library

var p = {

  // pass an arr, in the callback modify each
  // element in the array and return the newly modified array
  map: function(arr, callback) {
    if (!arr) return -1
    for (var i = 0; i < arr.length; i++) {
      arr[i] = callback(arr[i])
    }
    return arr
  },

  // reduces list down to single value
  reduce: function(arr, memo, callback) {
    if (!arr) return -1
    for (var i = 0; i < arr.length; i++) {
      memo = callback(memo, arr[i])
    }
    return memo
  },

  // returns the first element found in a list
  find: function(arr, callback) {
    if (!arr) return -1
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i]
      }
    }
    return -1
  },

  // returns an array for all elements that match
  filter: function(arr, callback) {
    if (!arr) return -1
    var retArr = []
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        retArr.push(arr[i])
      }
    }
    return retArr.length > 0 ? retArr : -1
  },

  // opposite of filter
  reject: function(arr, callback) {
    if (!arr) return -1
    var retArr = []
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        retArr.push(arr[i])
      }
    }
    return retArr.length > 0 ? retArr : -1
  }

}

// test map
var a = p.map([1, 2, 3], function(num) {
  return num * 2
})
var b = p.map(['hello', 'world'], function(werd) {
  return werd + ' i guess....'
})
console.log(a)
console.log(b)

// test reduce
var c = p.reduce([1, 2, 3], 0, function(memo, num) {
  return memo + num
})
var d = p.reduce([2, 10, 4], 4, function(memo, num) {
  return memo + num
})
console.log(c)
console.log(d)

// test find
var e = p.find([1, 2, 3], function(num) {
  return num % 2 == 0
})
console.log(e)

// test filter
var f = p.filter([1, 2, 3, 4, 5, 6], function(num) {
  return num % 2 == 0
})
console.log(f)

// test reject
var g = p.reject([1, 2, 3, 4, 5, 6], function(num) {
  return num % 2 == 0
})
console.log(g)
