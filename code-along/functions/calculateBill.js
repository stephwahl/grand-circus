// CalculateBill (functions start w verbs)

let bill = 200;
let taxRate = 0.05;

// 1) define or creating function
function calculateBill(bill, taxRate) {   // parameters - possible
//function body
const total = bill * (1+taxRate);
console.log(total);
return total;

}

// 2) call function

const myTotal = calculateBill(100, .06);  // Arguments - actual

console.log(`Your total is ${myTotal}`)