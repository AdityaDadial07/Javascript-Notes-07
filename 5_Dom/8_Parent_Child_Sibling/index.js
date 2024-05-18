//Parent, child and sibling elements

//ChildElement
let parentElement=document.querySelector('.content')
console.log(parentElement.children)//Print HTML collection

console.log(Array.from(parentElement.children))

//Using forEach loop
Array.from(parentElement.children).forEach((Element)=>{
    Element.classList.add('coders')
})

//ParentElements
let ChildElement1=document.querySelector('h1')
console.log(ChildElement1.parentElement)

//NextSibling
let NextSiblingElement=document.querySelector('h1')
// console.log(NextSiblingElement.nextElementSibling) //Next sibling
console.log(NextSiblingElement.previousElementSibling) //Previous sibling