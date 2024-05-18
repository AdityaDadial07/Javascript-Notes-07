let bool1=true;
let bool2="true";
console.log(typeof bool1, typeof bool2);

//Method 1 includes
let email="adi@gmail.com"
let boolvalue=email.includes("@");
console.log(boolvalue);//   true

//comparison operators(==,===,!=,!==,>,<,>=,<=)
let status="low";
console.log(status=="low");//   true
console.log(status=="high");//false

let points=100;
console.log(points>50);//true
console.log(points<50);//false
console.log(points=="100");//true
console.log(points==="100");//false   