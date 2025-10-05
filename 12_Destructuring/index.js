// //Array destructuring

// //Example 1
// let items = [1,2,3,4,5,6];
// let [a,b,,d]=items; //Skipping values
// console.log(a,b,d);

// //Example 2
// let hotel={
//     name:"Aditya_Residence",
//     location:"Dharamshala",
//     categories:["Italian","Indian","Chinese"],
// }

// let [first,,third]=hotel.categories //Nested destructuring

// console.log(first,third);


// //Swtiching variables
// [first,third]=[third,first];
// console.log(first,third);


// //Destructuring of nested array
// let nums=[2,4,[5,6]];
// let [x,y,[m,n]]=nums;
// console.log(x,y,m,n);




//Object destructuring
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

// // Example 1
// let {name,Location}=hotel;
// console.log(name,Location);

// //Example 2
// //Set custom variable names ot the object properties
// let {name:hotelName,Location:hotelLocation}=hotel;
// console.log(hotelName,hotelLocation);

//Example 3
//setting default values
// let {name,menu=[],categories=[]}=hotel;
// console.log(name,menu,categories);

//Example 4
//Nested object destructuring
let {name,openingHours}=hotel;
console.log(name,openingHours);

let {monday}=openingHours;
console.log(monday);

let {sunday:{open,close}}=openingHours;
console.log(open,close);

