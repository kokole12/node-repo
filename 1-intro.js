// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - filename
// require - function requires to use modules(common js)
//module - info bout current module (file)
// process - info about env where the process is being executed
const amount = 12

if(amount < 10){
    console.log('small number')
}
else{
    console.log('large number')
}
console.log('hey its my first node app')
console.log(__dirname)
setTimeout(()=>{
    console.log('hello world')
}, 2000)
