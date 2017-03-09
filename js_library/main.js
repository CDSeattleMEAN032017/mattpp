
var p = {

  map: function(arr, callback) {
    if (!arr) { return -1 }
    for (var i = 0; i < arr.length; i++) {
      arr[i] = callback(arr[i])
    }
    return arr
  },

  reduce: function(arr, callback) {

  },

  find: function(arr, callback) {

  },

  filter: function(arr, callback) {

  },

  reject: function(arr, callback) {

  }

}

// test map
var a = p.map([1, 2, 3], function(num) {
  return num * 2
})
console.log(a)
