//Map method
//Creating new array from existing array By applying some Transformation function

let salaries=[2000,3000,4000,2300,4300];
let newSalaries=salaries.map(salary=>{
    if(salary>3000){
        return salary-10;
    }
    else{
        return salary;
    }
})
console.log("Original salaries:",salaries); // [2000, 3000, 4000, 2300, 4300]
console.log("New updated salaries",newSalaries); // [2000, 3000, 3990, 2300, 4290]
