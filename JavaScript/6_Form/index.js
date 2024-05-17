//Form Event (Submit Form)

// let form=document.querySelector('.sign-up-form');
// let email=document.querySelector('#email')
// let password=document.querySelector('#password')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(form.email.value,form.password.value);
// })

// let form=document.querySelector('.sign-up-form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(form.userEmail.value,form.userPassword.value);
// })

//Regular expression->Basic Form validation using Regex
//Implementing username validation
//username can consist of A-Z a-z
//Length of username should be between 6 to 12

let form=document.querySelector('.sign-up-form');
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let userNamePattern=/^[A-Za-z]{6,12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username=user.value;
    //"test" method return boolean values
    let result=userNamePattern.test(username);
    if(result)
        {
            console.log("Username is valid");
        }
    else{
        console.log("Username is Invalid Try again")
    }
})

//Live feedback
user.addEventListener("keyup",(e)=>{
    if(userNamePattern.test(e.target.value)){
        console.log("Passed")
    }
    else{
        console.log("Failed")
    }
})