//SET
//SET is a collection of unique values. You can store any value, whether primitive or object reference.

//Example 1: Creating a Set
let mySet= new Set([1,2,3,4,2,4,2,5,7]);
console.log(mySet); //Output: Set(5) { 1, 2, 3, 4, 5, 7 }
console.log(mySet.size); //Output: 6
console.log(mySet.has(3)); //Output: true
console.log(mySet.has(10)); //Output: false
console.log(mySet.add(10)); //Output: Set(7) { 1, 2, 3, 4, 5, 7, 10 }
console.log(mySet.delete(2)); //Output: true
console.log(mySet); //Output: Set(6) { 1, 3, 4, 5, 7, 10 }

//Example 2: Iterating over a Set
for(let item of mySet){
    console.log(item);
}

//Example 13: Creating a Set
let mySet2= new Set("Programming");
console.log(mySet2); 
console.log(mySet2.size); 
console.log(mySet2.has(3)); 
console.log(mySet2.has(10)); 
console.log(mySet2.add(10)); 
console.log(mySet2.delete(2)); 
console.log(mySet2); 

//Example 2: Iterating over a Set
for(let item of mySet2){
    console.log(item);
}