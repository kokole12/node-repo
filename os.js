const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`the system up time is ${os.uptime()} seconds`)
console.log(os.hostname())
console.log(os.arch())
console.log(os.cpus())
console.log(os.release())
console.log(os.type())

const laptop ={
    type : os.type(),
    release : os.release(),
    memory :os.totalmem()
}

console.log(laptop)