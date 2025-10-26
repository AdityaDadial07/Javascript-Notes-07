// //Short Circuit Evaluation (AND && OR) (&& ||)

// //Falsy values: 0, "", undefined, null, NaN

// //Example 1: AND && operator 
// let result = "Coder" && 100 //if both are truthy then it returns the last value
// console.log(result);

// //Example 2
// let result2 = 0 && "Coder" //if one is falsy then it returns the first falsy value
// console.log(result2);

// //Example 3
// let result3 = "Coder" && 100 && null && "Aditya" //if one is falsy then it returns the first falsy value
// console.log(result3);


// //Example 4: OR || operator
// let result4 = "Coder" || 100 //if one is truthy then it returns the first truthy value
// console.log(result4);

// //Example 5
// let result5 = 0 || "CoderAD07" //if one is truthy then it returns the first truthy value
// console.log(result5);



// //------------------------------------------
// //Nullish Coalescing Operator (??)

// //Nullish values: null and undefined (NOT 0 or "")

// //Example 1
// let getCount = 0;
// let count = getCount ?? 10;
// console.log(count); //Output: 0 (because 0 is not nullish)

// //Example 2
// let getUser = null;
// let count2 = getUser ?? "Guest";
// console.log(count2); //Output: "Guest" (because null is nullish)




//--------------------------------------------------
// //Looping Arrays: for-of loop

// // for-of loop
// let menu = ["Pizza", "Pasta", "Risotto"];

// for(let item of menu)
// {
//     console.log(item);
// }

// for(let item of menu.entries()){
//     console.log(item);
// }

// for(let item of menu.entries()){
//     console.log(`${item[0]+1}: ${item[1]}`);
// }

// //if you want both index and element
// for(let [i,item] of menu.entries()){
//     console.log(`${i+1}: ${item}`);
// }



//--------------------------------------------------
//Enhanced Object Literals

// //Before ES6 and After ES6

// let openingHours= {
//     sunday:{
//         open:10,close:22,
//     },
//     monday:{
//         open:11,close:23,
//     },
// }

// //We can use computer property names also
// let menuType="Veg only";

// let hotel={
//     name:"Aditya_Residence",
//     Location:"Dharamshala",
//     categories:["Italian","Indian","Chinese"],
//     mainMenu:["Pizza","Pasta","Risotto"],
//     // openingHours:openingHours, //Before ES6
//     openingHours, //After ES6

//     // order:function(){} //Before ES6
//     order(){}, //After ES6

//     [menuType]:["Differnt types of Food type "], //Computed property names
// }

// console.log(hotel);

//----------------------------------------------------------
// //Optional chaninging (?.)

// let openingHours= {
//     sunday:{
//         open:10,close:22,
//     },
//     monday:{
//         open:11,close:23,
//     },
// }

// //We can use computer property names also
// let menuType="Veg only";

// let hotel={
//     name:"Aditya_Residence",
//     Location:"Dharamshala",
//     categories:["Italian","Indian","Chinese"],
//     mainMenu:["Pizza","Pasta","Risotto"],
//     openingHours,
// }

// console.log(hotel);

// //Let suppose you want to check thta hotel is open on tuesday or not if yes then what is opening time

// // console.log(hotel.openingHours.tuesday); //It will give undefined
// // console.log(hotel.openingHours.tuesday.open); //It will give error because tuesday is undefined

// //To avoid this error we have two methods
// //Method 1: Using if condition
// if (hotel.openingHours && hotel.openingHours.tuesday)
// {
//     console.log(hotel.openingHours.tuesday.open);
// }

// //Method 2: Using Optional chaining (?.)
// console.log(hotel.openingHours?.saturday?.open); //It will return undefined instead of error


//-----------------------------------------------------------------
// //Looping Objects: Object Keys, Values, Entries
let openingHours= {
    sunday:{
        open:10,close:22,
    },
    monday:{
        open:11,close:23,
    },
}

let property = Object.keys(openingHours);
console.log(property); //It will give array of keys

let values = Object.values(openingHours);
console.log(values); //It will give array of values

//Combined both keys and values
let entries = Object.entries(openingHours);
// console.log(entries); //It will give array of arrays of key value pairs
for(let [day,{open,close}] of entries)
{
    console.log(`On ${day}, we open at ${open} and close at ${close}`);
}