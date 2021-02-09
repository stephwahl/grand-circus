const math = require('./math');

// this is a better way, shortcut to destructure lines 6 & 7
const {x, addX} = math;

// const x = math.x;
// const addX = math.addX;

console.log(x);

const y = addX(5);
console.log(y);