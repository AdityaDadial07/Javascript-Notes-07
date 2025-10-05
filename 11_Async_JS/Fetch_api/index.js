//Async js
//Fetch API

fetch("data.json").then((data)=>{
    console.log("Promised 1 resolved",data);
    return data.json();
}).then((response)=>{
    console.log("Promised 2 resolved",response);
}).catch((error)=>{
    console.log("Promise rejected",error);
})