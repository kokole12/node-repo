const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first =  result

    readFile('./content/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        writeFile('./content/result-async.txt',
         'here is the new file in async write', {flag:'a'}, (err, result)=>{
             if(err){
                 console.log(err)
                 readFile
             }
             console.log(result)
         })
    })

}) 