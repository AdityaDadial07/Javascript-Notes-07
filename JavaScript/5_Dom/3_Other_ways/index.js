//Other ways of retrieving elements

//Get elements by using tagName
let tagNameElement=document.getElementsByTagName('p');
console.log(tagNameElement) //Return HTML collection //So, cannot use forEach loop

//Get elements by using class
let classElement=document.getElementsByClassName('CodersDost'); //Return array of elements
console.log(classElement)

//Get elements by using id
let IdElement=document.getElementById('Coders') //Return only one element
console.log(IdElement);

