
var arr = [7, 2, 10, 20, 14]

function findSum(x, y) {
  var sum = 0
  for (x; x < y; x++) {
    sum += x
  }
  return sum
}
// console.log(findSum(10, 20))

function findMaxValue(arr) {
  var max = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
// console.log(findMaxValue(arr))

function findAvg(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}
// console.log(findAvg(arr))


var person = {
  name: 'Matt',
  distance_traveled: 0,
  say_name: function() {
    console.log(`my name is ${this.name}`)
  },
  say_something: function(saying) {
    console.log(`${this.name} says ${saying}`)
  },
  walk: function() {
    console.log(`${this.name} is walking.`)
    this.distance_traveled += 3
  },
  run: function() {
    console.log(`${this.name} is running.`)
    this.distance_traveled += 10
  },
  crawl: function() {
    console.log(`${this.name} is crawling.`)
    this.distance_traveled += 1
  }
}
