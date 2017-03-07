
function VehicleConstructor(name, wheelsNum, passengerNum) {

  var vehicle = {}

  vehicle.name = name
  vehicle.wheelsNum = wheelsNum
  vehicle.passengerNum = passengerNum

  vehicle.makeNoise = function(noise) {
    console.log('Make a noise...')
  }

  return vehicle

}

var Bike = VehicleConstructor('Bike', 2, 1)
Bike.makeNoise = function() {
  console.log('Ring Ring...')
}
Bike.makeNoise()

var Sedan = VehicleConstructor('Sedan', 4, 5)
Sedan.makeNoise = function() {
  console.log('Honk Honk!')
}
Sedan.makeNoise()

var Bus = VehicleConstructor('Bus', 4, 20)
Bus.pickUp = function(numPass) {
  Bus.passengerNum += numPass
}
Bus.pickUp(15)
console.log(Bus.passengerNum)
