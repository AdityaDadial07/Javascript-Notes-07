//Getting and setting attribute of elements

//Getting attribute of element
let CoderDostLink=document.querySelector('a')
console.log(CoderDostLink.getAttribute('href'))

//Setting attribute of element
CoderDostLink.setAttribute('href','https://www.youtube.com/watch?v=lGmRnu--iU8')
console.log(CoderDostLink.getAttribute('href'))
CoderDostLink.innerText='My js learning vedio hehe'