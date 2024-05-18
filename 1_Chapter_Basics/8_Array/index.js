//Array
let array1=["aditya","anmol","sahil","ujwal"];
console.log(array1);//  aditya,anmol,sahil,ujwal

//Accessing element
console.log(array1[2]);//sahil

//Modifying element
array1[0]="adi";//adi is added
console.log(array1);//adi,anmol,sahil,ujwal

//Array methods
//Join
console.log(array1.join());//adi,anmol,sahil,ujwal
console.log(array1.join(" "));//adi anmol sahil ujwal
console.log(array1.join("-"));//adi-anmol-sahil-ujwal

//indexOF
console.log(array1.indexOf("adi"));//       0
console.log(array1.indexOf("sahil"));// 2
console.log(array1.indexOf("ujwa"));//-1

//concat
let array2=["1","2","3","4"];
console.log(array1.concat(array2));//  array1 and array2 are concatenated //["adi","anmol","sahil","ujwal","1","2","3","4"]

//length
console.log(array1.length);//   

//push
array1.push("aditi");//   aditi is added
console.log(array1);//  aditi is added

//pop
console.log(array1.pop());//    aditi
console.log(array1);//aditi is removed


