//Filter 
//Filter method is used to perform filteration on array

let array1=["abc","bcd","cde","def"];

//Now you only want to filter abc and def

let filterarr=array1.filter((arr)=>{
    if(arr==="abc" || arr==='def'){
        return arr;
    }
});
console.log(filterarr);