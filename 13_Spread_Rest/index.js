// // Spread operator:  ... 

// let hotel={
//     name:"Aditya_Residence",
//     Location:"Dharamshala",
//     categories:["Italian","Indian","Chinese"],
//     mainMenu:["Pizza","Pasta","Risotto"],
//     openingHours:{
//         sunday:{
//             open:10,close:22,
//         },
//         monday:{
//             open:11,close:23,
//         },
//     }
// }

// // //Example 1:
// let updatedMenu=[...hotel.mainMenu,"Khicdhi"];

// console.log(updatedMenu);
// console.log(hotel.mainMenu);

// // //Example 2:
// let nums=[1,2,3];
// let newNums=[-1,-2,-3,-4,...nums];
// console.log(newNums);

// //Example 3: joining two arrays
// let updatedNums=[...nums,...newNums];
// console.log(updatedNums);




//-------------------Rest Pattern------------------

//Rest pattern: and parameter

let hotel={
    name:"Aditya_Residence",
    Location:"Dharamshala",
    categories:["Italian","Indian","Chinese"],
    mainMenu:["Pizza","Pasta","Risotto"],
    openingHours:{
        sunday:{
            open:10,close:22,
        },
        monday:{
            open:11,close:23,
        },
    }
}

//Syntx of REST(...) Get elements from an array and store them in a variable

//Example 1
let nums=[1,2,3,4,5];

let [a,b,...others]=nums; //Rest pattern
console.log(others);
console.log(a,b);
console.log(nums);

//Example 2
let {sunday,...weekdays}=hotel.openingHours;

console.log(weekdays);
console.log(hotel.openingHours);