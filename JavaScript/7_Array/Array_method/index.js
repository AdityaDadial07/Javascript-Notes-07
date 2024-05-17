//Working with arrays(Simple functions)

let letters = ["a","b","c","d","e"]
console.log("Printing original letters : ",letters);

//Reverse the array(mutate the original array)
let reverse = letters.reverse();
console.log("Printing reverse letters : ",reverse);

//Concat
let numbers= [1,2,3,4,5]
let concated=numbers.concat(letters);
console.log("Concatination output is : ", concated); //This gives output as array
console.log(...numbers,...letters) //This gives output as  1 2 3 4 5 'e' 'd' 'c' 'b' 'a'

//Join
let joined = letters.join()
console.log(joined)
console.log(typeof joined) // give string ,
let joined2=letters.join(" ");
console.log(joined2);



