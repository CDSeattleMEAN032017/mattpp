
function runningLogger() {
  console.log('I am running!')
}

function multiplyBy10(num) {
  num = num * 10
  return num
}

// console.log(multiplyBy10(5))

function stringRet1() {
  return 'hello there my friends'
}

function stringRet2() {
  return 'goodbye my peoples'
}

function caller(arg) {
  if (typeof(arg) == 'function') {
    return arg()
  }
}

// console.log(caller(stringRet2))

function myDoubleConsoleLog(arg1, arg2) {
  if (typeof(arg1) == 'function' && typeof(arg2) == 'function') {
    console.log(arg1(), arg2())
  }
}

// myDoubleConsoleLog(stringRet1, stringRet2)

function caller2(arg1) {
  console.log('starting...')
  setTimeout(function() {
    if (typeof(arg1) == 'function') {
      arg1()
    }
    console.log('hi')
  }, 2000)

  console.log('ending...')
  return 'interesting'
}

caller2(myDoubleConsoleLog(stringRet1, stringRet2))
