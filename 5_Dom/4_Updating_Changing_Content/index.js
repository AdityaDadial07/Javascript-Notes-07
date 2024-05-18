//Updating and changing content of HTML

//innerHTML
let heading=document.querySelector('h1');
heading.innerHTML="<p>Great Coders</p>"// Only updating value
console.log(heading.innerHTML)//Keep format of HTML

//innerText
let heading2=document.querySelector('h1');
heading.innerText="<p>Great Coders</p>"//Updating as it is
console.log(heading.innerText)//Ignore spaces