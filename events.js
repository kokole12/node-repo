const EventEmitter = require('node:events')


const customEmitter = new EventEmitter()
customEmitter.on('response', ()=>{
    console.log(`data recieved`)
})
customEmitter.on('response', ()=>{
    console.log(`othe logic here in this section`)
})

customEmitter.on('response', (name, id)=>{
    console.log(`user recieved with name ${name} and id : ${id}`)
})



customEmitter.emit('response','john', 2)
