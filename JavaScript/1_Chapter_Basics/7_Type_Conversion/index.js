let string1="53";
console.log(string1,typeof string1);

//Number method
let number1=Number(string1);
console.log(number1,typeof number1);
//Note that if the string is not a number, it will return NaN

//String method
let string2=String(number1);
console.log(string2,typeof string2);

//Boolean method
let age="32";
let booleanValue=Boolean(age);
console.log(booleanValue,typeof booleanValue);

let age2='0';
let booleanValue2=Boolean(age2);
console.log(booleanValue2,typeof booleanValue2);

let age3='';
let booleanValue3=Boolean(age3);
console.log(booleanValue3,typeof booleanValue3);