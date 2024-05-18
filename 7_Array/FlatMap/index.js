//Flat method
//It create new array with the elements of subarray concatenated to it.

let arr=[1,2,3,4,[5,6,[7,8,9]]];

console.log("Array before flating",arr);

let result=arr.flat(2);//Be default if pass nothing it will take flat method parameter as 1;

console.log("Array after flating it",result);


//Flatmap method
//It is combination of the "map()" method and followed by "flat()" method of depth "1".
let cart=[
    {
        name:"Mobile Phone",
        qty:2,
        price:500
    },
    {
        name:"Tablet",
        qty:1,
        price:100
    }
]

let newCart=cart.flatMap((item)=>{
    if(item==="Mobile Phone"){
    return [item,{name:"Screen protector",qty:"1",price:0}];
    }
    else{
        return [item];
    }
})

console.log(newCart);