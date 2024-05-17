//Timer function
// 1. setTimeout
// setTimeout is a timer function that executes a function after a specified amount of time.
function message(name){
    console.log(`Hello everyone, ${name} gonna prove himself. Wait and watch`)
}
setTimeout(message,3000,"Aditya")
// 2. setInterval
// setInterval is a timer function that executes a function at a specified interval.
setInterval(message,2000,"Aditya")