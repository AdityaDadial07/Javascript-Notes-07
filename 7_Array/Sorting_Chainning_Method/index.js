//Sorting array using sorting method
//By default sorting method is used to sort string
//It firstly convert everything into string and then...sort

let letters = ["d","e","b","c","a"];

console.log(letters.sort());

let num=[-3,-1,10,2,3,-25];
console.log(num.sort());//incorrect output as its first convert it into string and sort

//a-b<0 => a<b => A,B keep order same
//a-b>0 => a>b => B,A Swap the order

num.sort((a,b)=>{
    if(a<b){
        return -1; //Any number less than 0
    }
    else {
        return 1;//Any number greater than 0
    }
})
console.log(num);


//Another method 
num.sort((a,b)=>{
 return a-b;
})
console.log(num);

//Descending order
//Another method 
num.sort((a,b)=>{
    return b-a;
   })
   console.log(num);

// ******************************************************************************//

//Chaining method
//contain multiple method one after other
let numbers=[1,4,2,5,7,6,5];
console.log(numbers.slice(0,5).splice(1,1,10));