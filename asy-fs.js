const {readFile, writeFile} = require('fs')
const util  = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
   try {
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    await writeFilePromise('./content/written.txt', 'hello this is the new file')
    console.log(first, second)
   } catch (err) {
       console.log(err)
   } 
}
start()

// const getData = (path)=>{
// return new Promise((resolve, reject)=>{
//     readFile(path,'utf8',(err, data)=>{
//         if(err){
//             reject(err)
//             return
//         }
//         resolve(data)
//     })
// })
// }
// getData('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))