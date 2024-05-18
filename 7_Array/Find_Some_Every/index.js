//Find 
//It return the "first" element we are looking for

let students =[{id:1,name:"adi"},{id:2,name:"aru"},{id:3,name:"aru"}];
let result = students.find((student)=>{
    return student.name ==="aru";
})

console.log(result);


//FindIndex method
//It return "index" of that array element who "first" passes the 
//test "otherwise" -1

let ages=[14,23,43,22,21,12,23,12];
let resultage=ages.findIndex((age)=>{
    if(age>18){
        return age;
    }
})
console.log(resultage);

//Some and every method

//some method is used to return "true" if "any" elements passes the test
let scores=[24,32,66,54,47,41,89];
let newScores=scores.some((scr)=>{
    return scr>30
});
console.log(newScores);//True since some elements are greater than 30

//every method is used to return "true" if "every" elements passes the test
let newScores2=scores.every((scr)=>{
    return scr>30
});
console.log(newScores2);//False since all elements are not greater than 30
