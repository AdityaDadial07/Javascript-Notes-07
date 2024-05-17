//if, if else, if else if else
let age=19;
if(age>=18){
    console.log("You are adult");
}
else if(age>=13){
    console.log("You are teenager");
}
else{
    console.log("You are child");
}

//nested if else
let weight=49;
if(age>=18){
    if(weight>=50){
        console.log("You can donate blood");
    }
    else{
        console.log("You can not donate blood");
    }
}
else{
    console.log("You are not adult");
}

//switch case
let code='US';
switch(code){
    case 'IN':
        console.log('INDIA');
        break;
    case 'US':
        console.log('UNITED STATES');
        break;
    default:
        console.log('Not found');
}

// Ternary operator
let vote = age>=18 ? 'You can vote': "You can not vote";
console.log(vote);