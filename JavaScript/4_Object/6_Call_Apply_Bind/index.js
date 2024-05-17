//Call
// Call is a method that is used to call a function with a given this value and arguments provided individually.
let mainplane={
    airline:'Air India',
    code: 'AI',
    booking:[],
    book:function(name,flightno){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightno}`);
        this.booking.push({flightname:`${this.airline} ${this.code}${flightno}`,name});
    }
}
mainplane.book('John',123);
mainplane.book('Doe',456);
console.log(mainplane.booking);

let childplane={
    airline: 'Indigo',
    code: 'IG',
    booking:[],
}

let book= mainplane.book;
//Call method
book.call(childplane,'jack',768);
console.log(childplane.booking);

//Apply method
book.apply(childplane,['adi',987]);
console.log(childplane.booking);

//Bind method
//Bind method is used to create a copy of a function with a certain this value and initial arguments.
let greet= function(){
    console.log(`Welcome to this ${this.airline}, ${this.name}`);
}
let person1={
    name: 'John',
    airline: 'Air India'
}
let greeting=greet.bind(person1);
greeting();