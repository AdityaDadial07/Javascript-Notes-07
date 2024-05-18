//For in loop is used to iterate over the properties of an object
let person={
    name:'John',
    age:22
}
console.log(person);
let string1='';
for(let x in person){
    string1+=person[x];
}
console.log(string1);

//For accessing keys
for(let y in person)
{
    console.log(y);
}

//For accessing values
for(let y in person)
{
    console.log(person[y]);
}