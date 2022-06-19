const names = require('./4-names')
const sayHi = require('./util')
const data = require('./6-alternativeexport')
require('./7-addition')
console.log(data)

sayHi('suzan')
sayHi(names.john)
sayHi(names.peter)