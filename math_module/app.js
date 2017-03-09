
var math = require('./mathlib')()

console.log('adding method', math.add(10, 13))
console.log('multiply method', math.multiply(5, 3))
console.log('square method', math.square(7))
console.log('random method', math.random(5, 25))
console.log('random again', math.random(25, 5))
