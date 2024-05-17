//Slice method 

//Used to extract part of array
//Array.slice(startIndex,lastIndex(Excluded))
//Return new array of extracted elements

let num=[3,5,7,8,6,4];
let extracted=num.slice(0,3); //3 index is excluded
console.log("Original array",num); 
console.log("Extracted array",extracted); //3 5 7

let extracted2=num.slice(1,3); //3 index is excluded
console.log("Original array",num); 
console.log("Extracted array 2",extracted2);

//Splice method
//Used to add new elements into array
//Array.splice(index,deleteValue,valueToAdded)
//Return deleted items in form of array
let num2=[1,2,3,2,5,6,4,2]
let newarray=num2.splice(1,2,4);
console.log(newarray); //[2,3] is deleted now
console.log(num2); //[1, 4, 2, 5, 6, 4, 2] //Mutating method as it mutate original array







