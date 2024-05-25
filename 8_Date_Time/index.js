//Date and Time
//Date object 
//Date object always carry both "Date" and "Time"

//Using Date method
let currentDate = new Date(21,12,24); //Format yyyy mm dd // 
//Month 0 to 11 
//12 will be converted into Jan
//24 will be converted into 1924
//For getting 2024, you need to write 2024 only
let currentDate2= new Date(2024,1,24,12,12,12); // hr:min: sec
console.log(currentDate);
console.log(currentDate2);



//Using Timestamp (integer number represent in "ms" from 1-1-1970)
let currentDate3=new Date(0);
console.log(currentDate3);

let currentDate4=new Date(24*60*60*1000)
console.log(24*60*60*1000)
console.log(currentDate4);

//To get time in "ms"
let currentDate5=new Date().getTime();
console.log(currentDate5);

//To get complete date and time
le