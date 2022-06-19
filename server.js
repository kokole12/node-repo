const http = require('http')

const server  = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.end('welcome to our home page')
    }
    if(request.url ==='/about'){
        response.end('here is a short story')
    }
   response.end(`
   <h1>opps page not found</h1>
   `)
})
server.listen(5000)