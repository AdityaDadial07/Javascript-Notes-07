//Chaining methods

//Class declaration
class bankAccount{
    constructor(owner,pin){
        this.owner=owner;
        this.pin=pin;
        this.movements=[];
    }

    getMovements(){
        return this.movements;
    }

    deposit(val){
        this.movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this
    }
}

let account = new bankAccount("Zack",5678);
//Chain of methods
account.deposit(45).withdraw(23).deposit(100).withdraw(40);

console.log(account.getMovements());
console.log(account);