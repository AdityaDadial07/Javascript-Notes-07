//Function parameter and arguments
// 1. Function parameter
// 2. Function arguments
// 3. Function default parameter

// 1. Function parameter
// Function parameter is a variable that is declared in the function definition.]
function sum(a,b)//a,b are parameters
{
    return a+b;
}

//2. Function arguments
sum(1,3);//4 //1,3 are arguments

//3. Function default parameter
function sum(a=0,b=0)//a,b are default parameters
{
    return a+b;
}
console.log(sum());//0

//4. Return value
let ageCalculation=function(currentyear,birthyear){
    let age = currentyear-birthyear;
    return age;
    console.log("This is not printed");//This is not printed
}
let ageNow=ageCalculation(2021,1998);
console.log(ageNow);//23