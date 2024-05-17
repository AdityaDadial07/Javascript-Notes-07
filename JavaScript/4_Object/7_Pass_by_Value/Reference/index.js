//Object/array how reference is passed to value
//Pass by refenece
let arr=[1,2,3,4,5];
let arr2=arr;
console.log(arr);
console.log(arr2);
arr2[5]=7;
console.log(arr);
console.log(arr2);

console.log('---');

//Pass by value
let arr3=[1,2,3,4,5];
let arr4=[...arr3]; //spread operator
console.log(arr3);
console.log(arr4);
arr4[5]=7;
console.log(arr3);
console.log(arr4);


//To avoid pass by reference, we can declare array using const keyword
//const arr5=[1,2,3,4,5];


