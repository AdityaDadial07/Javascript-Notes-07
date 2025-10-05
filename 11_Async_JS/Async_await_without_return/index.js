// //Async js
// //Async await without return statement

// let getTodos=async()=>{
//     let response=await fetch("data.json");
//     let data=await response.json();

//     let response2=await fetch("mario.json");
//     let data2=await response2.json();
//     // return data;
//     // return data2; //Only first return statement will be executed

//     console.log(data,data2);
// }

// getTodos()


//Async js
//Try catch block

let getTodos=async()=>{
    try{
    let response=await fetch("datas.json");
    let data=await response.json();

    let response2=await fetch("mario.json");
    let data2=await response2.json();
    // return data;
    // return data2; //Only first return statement will be executed

    console.log(data,data2);
    }
    catch(error){
        console.log(error.message);
    }}

getTodos()