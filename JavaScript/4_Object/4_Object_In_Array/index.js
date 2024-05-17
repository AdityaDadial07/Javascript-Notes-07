//Object inside array
let arr = [{name:'John',age:22},{name:'Doe',age:24}];
console.log(arr);
console.log(arr[0]);
console.log(arr[1].name);

console.log('---');
for(let i=0;i<arr.length;i++){
 console.log(arr[i]['name']);
}

console.log('---');
arr.forEach(function(element){
    console.log(element['name']);
    console.log(element.age);
})