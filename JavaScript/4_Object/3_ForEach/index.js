//forEach loop
//it is a method that calls a function once for each element in an array, in order.
//forEach is a method that is called on an array and takes a function as an argument.
//Doesnot have a return value.

//Normal for loop
let arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
 console.log(arr[i]);
}
console.log('---');

//forEach
arr.forEach(function(element){console.log(element);});