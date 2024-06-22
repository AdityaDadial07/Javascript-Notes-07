//Callback function
let todos =(callback)=>{
    //Making HTTP Request
let request= new XMLHttpRequest(); //Use to make request to server
console.log(request,request.readyState);

//Value  state     Description
//0      unsend    Client have created. open() not call yet.
//1      opened    open() is called
//2      Header_Received  send() haved been called and headers
//3      Loading   responseText hold partial data
//4      Done      The operation is complete


//HTTP response status code
// Informational response(100-199)
// Successful response(200-299)
// Redirectional response(300-399)
// Client error response(400-499)
// Server error respones(500-599)

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState)
    if(request.readyState=== 4 && request.status == 200){ //Status code
        // console.log(request,request.responseText)
        //Extacting JSON data
        let data=JSON.parse(request.responseText);
        callback(undefined,data);
    }
    else if(request.readyState ===4){
        // console.log("Data could not be fetch");
        callback("Data cannot be fetch",undefined);
    }
})

//Set up the request
// request.open("Get","https://jsonplaceholder.typicode.com/todos");
request.open("Get","data.json");


//Sending the request
request.send()

}


console.log(1)
console.log(2)

//Async code will take some time to execute
todos((error,Data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(Data);
    }

})

console.log(3);
console.log(4);