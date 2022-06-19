const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second  = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`hello this is the file we are wrting in ${first} and this is the ${second}`)



