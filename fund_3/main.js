
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

function Person(name) {
  return {
    name,
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
}

var matt = Person('Matt')
matt.say_something('i am very neat')

function ninjaConstructor(name, cohort) {
  var beltLevel = 'yellow'
  return {
    name,
    cohort,
    increaseBeltLevel: function() {
      if (beltLevel == 'yellow') { beltLevel = 'red' }
      else if (beltLevel == 'red') { beltLevel = 'black' }
      console.log(`${name} now has a ${beltLevel} belt.`)
    }
  }
}

var matt2 = ninjaConstructor('Matt', 'Best Cohort')
matt2.increaseBeltLevel()
