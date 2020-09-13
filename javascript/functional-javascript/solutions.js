// **** Solutions ****

// Exercise: hello world
const upperCase = (input) => {
  return input.toUpperCase()
}
module.exports = upperCase


// Exercise: higher order functions
const repeat = (operation, num) => {
  if(num <= 0) 
    return
  return repeat(operation, --num)
}

module.exports = repeat


// Exercise: basic: map
const doubleAll = (numbers) => {
  return result = numbers.map((item) => item * 2)
}

module.exports = doubleAll


// Exercise: basic: filter
const getShortMessages = (messages) => {
  return results = messages
    .filter((obj) => obj.message.length < 50)
    .map((obj) => obj.message)
}

module.exports = getShortMessages


// Exercise: basic: every some
const checkUsersValid = (goodUsers) => {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((obj1) => {
      return goodUsers.some((obj2) => {
        return obj1.id === obj2.id
      })
    })
  }
}

module.exports = checkUsersValid


// Exercise: basic: reduce
const countWords = (inputWords) => {
  return inputWords.reduce((accObj, item) => {
    accObj[item] = (accObj[item] || 0) + 1
    return accObj
  }, {})
}

module.exports = countWords


// Exercise: basic: recursion
const reduce = (arr, fxn, initial) => { 
  return (function operation(index, acc) {
    if(index > arr.length - 1) return acc
    return operation(index + 1, fxn(acc, arr[index], index, arr))
  })(0, initial)
}

module.exports = reduce


// Exercise: basic: call
const duckCount = (...arguments) => {
  return arguments.filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount


// Exercise: partial application without bind
const logger = (namespace) => {
  return function (...info) {
    return console.log.apply(null, [namespace].concat(info))
  }
}

module.exports = logger


// Exercise: partial application with bind
const loggerWithBind = (namespace) => {
  return function(...info) {
    return console.log.bind(null, namespace, ...info)()
  }
}

module.exports = loggerWithBind


// Exercise: implement map with reduce
const arrayMap = (arr, fxn, thisArg) => {
  return arr.reduce((acc, item, index, arr) => {
    acc.push(fxn.call(thisArg, item, index, arr))
    return acc
  }, [])
}

module.exports = arrayMap


// Exercise: functions spies
const Spy = (target, method) => {
  let result = { count: 0 }
  const fxn = target[method]

  target[method] = function() {
    result.count++
    return fxn.apply(this, arguments)
  }
  return result
}

module.exports = Spy


// Exercise: blocking event loop
const asyncRepeat = (operation, num) => {
  if(num <= 0) return
  operation()
  if(num % 10 === 0) {
    setTimeout(() => {
      asyncRepeat(operation, --num)
    })
  }
  else {
    asyncRepeat(operation, --num)
  }
}

module.exports = asyncRepeat


// Exercise: trampoline
const syncRepeat = (operation, num) => { 
  if(num <= 0) return
  return () => {
    operation()
    return syncRepeat(operation, --num)
  }
}

const trampoline = (fxn) => {
  while(fxn && typeof fxn === 'function')
    fxn = fxn()
  return fxn;
}

module.exports = (operation, num) => {
  return trampoline(() => {
    return syncRepeat(operation, num)
  })
}


// Exercise: async loops
const loadUsers = (userIds, load, done) => {
  const users = []
  for(let i=0; i<userIds.length; i++) {
    load(userIds[i]), (result) => {
      if(result)
        users.push(result)
    }
  }
  done(users)
  return users
}

module.exports = loadUsers


// Exercise: recursion
const getDependencies = (tree, arr) => {
  arr = arr || []
  const dependencies = tree.dependencies || {}
  if(!tree.dependencies) return []
  Object.keys(dependencies).map((key) => {
    const entry = key + '@' + dependencies[key].version
    if(arr.indexOf(entry) < 0)
      arr.push(entry)
    getDependencies(dependencies[key], arr)
  })
  return arr.sort()
}

module.exports = getDependencies


// Exercise: currying
const curryN = (fxn, n = fxn.length) => {
  return (arg) => {
    if(n <= 1) 
      return fxn(arg)
    return curryN(fxn.bind(this, arg), n-1)
  }
}

module.exports = curryN


// Exercise: function call
module.exports = Function.prototype.call.bind(Array.prototype.slice)
