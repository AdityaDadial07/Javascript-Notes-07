//String->Characters enclosed in single or double quotes
let firstName = "John";
let lastName = 'Doe';
console.log(firstName, lastName);//John Doe

//String Concatenation
//1. Using + operator
console.log(firstName+lastName);//JohnDoe
//2. Using template literals
console.log(`MY NAME IS ${firstName} ${lastName}`)

//String Methods
//1. toUpperCase()
console.log(firstName.toUpperCase());//JOHN

//2. toLowerCase()
console.log(firstName.toLocaleLowerCase())//john

//3. Trim()
let str = "   Hello "
console.log(str.trim());//Hello

//4. IndexOf()
console.log(firstName.indexOf('n'));//3

//5. lastIndexOf()
console.log(firstName.lastIndexOf('n'))//3

//6.Includes()
console.log(lastName.includes('Do'))//true

//7. Slice()
console.log(firstName.slice(1,3))//oh

//String are immutable
firstName[0]='h';//Not allowed
console.log(firstName[0]);//John

//8. Split()
let str1="Hello world";
console.log(str1.split(" "))//["Hello","world"]

let str2="Hello,world";
str2= str2+" Aditya is here to learn";
console.log(str2)
