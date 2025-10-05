//Async js
//Async await

let getTodos=async()=>{
    let response=await fetch("data2.json");
    if(response.status!=200){
        throw new Error("Custom:Error while fetching data") //Custom error message
    }
    let data=await response.json();
    return data;
}

getTodos().then((data)=>{
    console.log("Resolved:",data)
}).catch((error)=>{
    console.log("Rejected:",error);

})