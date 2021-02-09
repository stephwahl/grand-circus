// Skills: Classes, extended classes, and methods

// Create a class called "BankAccount"
// Properties:
// ● balance
// ● interestRate

class BankAccount {
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }

// Methods:
// ● addInterest() // increases the balance by adding the appropriate interest
    addInterest() {
        this.balance = this.balance + (this.balance * this.interestRate);
    }
}

let newBankAccount = new BankAccount(100, .03);
newBankAccount.addInterest();
console.log(newBankAccount);

// Next, create a subclass called "BankAccountWithFee"
// It inherits all the properties and methods from BankAccount and adds the following.
// Properties:
// ● fee // a fixed dollar amount fee

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee) {
        super(balance, interestRate);
        this.fee = fee;
    }
// Methods:
// ● applyFee() // subtracts the fee from the balance
    applyFee() {
        this.balance = this.addInterest - this.fee;        
    }
}

let balanceWithFee = new BankAccountWithFee(5);
balanceWithFee.applyFee();
console.log(balanceWithFee);



// Create a few instances (a.k.a. objects) of each class, and test them out by calling the methods.

