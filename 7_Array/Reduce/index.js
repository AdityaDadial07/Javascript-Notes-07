//Array method-> reduce

//reduce method
//run reducer function for each array element
//Array.reduce(function(total,currentValue),initialValue)
//It return single value

//Sum of all elements using reduce method
let num = [1,2,4,3,5,6,2];

let sum = num.reduce(function(total,currentValue){
    return total + currentValue
},0);

console.log(sum); //It does not mutate the array