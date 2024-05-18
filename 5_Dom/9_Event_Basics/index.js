//Event basics
// let eventElement=document.querySelector('.ClickMe');

// eventElement.addEventListener('click',function(){
//     console.log("Item submit")
// })

//Using loop over li event
// let elements=document.querySelectorAll('li')

//Adding event
// elements.forEach((element) => {
//     element.addEventListener('click',function(e){
//         console.log(e.target) //Event object
//         e.target.style.textDecoration="line-through"
//     })
    
// });

//Removing event
// elements.forEach((element) => {
//     element.addEventListener('click',function(e){
//         e.target.remove();
//     })
    
// });

//Creating event
const  ul=document.querySelector('ul')
let button1=document.querySelector('.ClickMe')

button1.addEventListener('click',function(){
    let li =document.createElement('li');
    li.innerText="Something new added";
    // ul.append(li)
    ul.prepend(li)
})