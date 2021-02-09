function inchToCM() {
    const cm = inches * 2.54;
    return cm;
}
//anonymous function
const inchToCM = function(inches) {
    return inches * 2.54
}
//ARROW FUNCTION
//delete the word 'function' and add a FAT ARROW => after inches
// all on one line
// delete curly brackets
// delete 'return' keyword

const inchToCM = (inches) => {
    return inches * 2.54;
}
//implicit return (you dont have to type the 'return' keyword... magic!)
const inchToCM = (inches) => { return inches * 2.54; }
// the final, sleekest version of the arrow function
const inchToCM = inches => inches * 2.54;