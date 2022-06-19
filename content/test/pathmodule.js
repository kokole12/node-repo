const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'text', 'text.txt')

console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'test', 'text.txt')
console.log(absolute)