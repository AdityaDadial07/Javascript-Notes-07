//Getting HTML element using querySelector/all
console.log(document)

//querySelector return first HTML element that match CSS selector
let resultElement=document.querySelector('p')
console.log(resultElement)

//querySelectorAll return all element of HTML that matches CSS selector condition
let resultElement2=document.querySelectorAll('p')
console.log(resultElement2)//Give output as NodeList

//For loop to iterate over NodeList. Note-> As output is NodeList so we can iterate nut cannot iterate over HTML collection
resultElement2.forEach((element)=>{
    console.log(element)
})

//Retrieving element based upon class 
let resultElement3=document.querySelector('.CodersDost')
console.log(resultElement3)

//Retriving element based upon id
let resultElement4=document.querySelector('#Coders')
console.log(resultElement4)