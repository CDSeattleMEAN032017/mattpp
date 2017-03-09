
module.exports = function() {
  return {
    // adds 2 numbers
    add: function(num1, num2) {
      if (!num1 || !num2) {
        console.log('Please specify 2 numbers.')
        return -1
      }
      else {
        return num1 + num2
      }
    },
    // multiplies 2 numbers
    multiply: function(num1, num2) {
      if (!num1 || !num2) {
        console.log('Please specify 2 numbers.')
        return -1
      }
      else {
        return num1 * num2
      }
    },
    // squares a number
    square: function(num) {
      if (!num) {
        console.log('Please specify a number.')
        return -1
      }
      else {
        return num * num
      }
    },
    // generates a random # between 2 numbers
    random: function(num1, num2) {
      if (!num1 || !num2) {
        console.log('Please specify 2 numbers.')
        return -1
      }
      else {
        var a, b
        // find the bigger num
        if (num2 > num1) {
          a = num1
          b = num2
        }
        else {
          a = num2
          b = num1
        }
        return Math.floor((Math.random() * b) + a)
      }
    }
  }
}
