//Asynchronous javascript
//Example
console.log(1);
console.log(2);

//Async code
setTimeout(()=>{console.log("Call back function after 3 seconds")},3000); //This block will not stop execution of rest of code 

console.log(3);
console.log(4);
console.log(5);
