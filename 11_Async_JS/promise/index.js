// Promise is used to handle async code in a better way than callback function and it also helps to avoid callback hell or pyramid of doom
//General example of Promise

// let something=()=>{
//     return new Promise((resolve,reject)=>
//     // resolve("Hello bhaiyo, some data is here")
//     reject("Some error is here")
//     )
// }

// something().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)});





//Promise real world example
let todos =(service)=>{

    return new Promise((resolve,reject)=>{
        //Making HTTP Request
        let request= new XMLHttpRequest(); //Use to make request to server
        console.log(request,request.readyState);

        request.addEventListener('readystatechange',()=>{
            // console.log(request,request.readyState)
            if(request.readyState=== 4 && request.status == 200){ 
                //Extacting JSON data
                let data=JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState ===4){
                reject("Data could not be fetch");
                
            }
        })

        //Set up the request
        // request.open("Get","https://jsonplaceholder.typicode.com/todos");
        request.open("Get",service);


        //Sending the request
        request.send(); 
    })

}


//changing of promises
todos("data.json").then((data)=>
{
    console.log("Promise 1 resolved",data);
    return todos(("lurie.json"))
}).then((data)=>{
    console.log("Promise 2 resolved",data);
}).catch((error)=>{
    console.log("Promise rejected",error);
})

//Only one catch is used to catch the error of any promise in the chain. 