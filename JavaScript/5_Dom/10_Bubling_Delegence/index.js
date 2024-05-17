//Delegence
//Technique in js Where we delegate the responsiblity of handling event to parent elements
const ul=document.querySelector('ul');
ul.addEventListener('click',(e)=>{
    if(e.target.nodeName=='li')
    {
       e.target.removeEventListener();
    }
})
//Creating child element with help of parent element


//Bubling
//Element recieves an event and that Bubbles up to its parent  and ancestor element to reaches to root elemetns
const ul1=document.querySelector('ul')
console.log("iNSIDE UL");

ul.addEventListener('click',(e)=>{
    console.log("Inside li");
})

//Other event
//let copyEventElement=document.queryselector('.copy');
//copyEventElement.addEventListener('copy',function());
//mouseEventElement.addEventListener('mousemove',function())