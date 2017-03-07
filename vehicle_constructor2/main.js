function VehicleConstructor(name, wheelsNum, passengerNum, speed) {

  var distanceTravelled = 0

  this.name = name
  this.wheelsNum = wheelsNum
  this.passengerNum = passengerNum
  this.speed = speed

  this.makeNoise = function(noise) {
    console.log('Make a noise...')
  }

  this.move = function() {
    this.updateDistanceTravelled()
    this.makeNoise()
  }

  this.checkMiles = function() {
    console.log(distanceTravelled)
  }

  var updateDistanceTravelled = function() {
    distanceTravelled += speed
  }
}

var Bike = new VehicleConstructor('Bike', 2, 1)
Bike.makeNoise = function() {
  console.log('Ring Ring...')
}
Bike.makeNoise()

var Sedan = new VehicleConstructor('Sedan', 4, 5)
Sedan.makeNoise = function() {
  console.log('Honk Honk!')
}
Sedan.makeNoise()

var Bus = new VehicleConstructor('Bus', 4, 20)
Bus.pickUp = function(numPass) {
  Bus.passengerNum += numPass
}
Bus.pickUp(15)
console.log(Bus.passengerNum)
