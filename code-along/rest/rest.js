// Pretend that console.log only takes in one argument

// Create a function that taking any amount of arguments,
// call console.log with each of those arguments?

// console.log(thing1, thing2, thing3);

function consoleAll(...args) {
    // take in any amount of arguments
    let response = "";
    // for(arg of args) {
    //     response += `${arg} `;
    // }
  
    let length = args.length;
    for (let i = 0; i < length; i++) {
      response += `${args[i]} `;
    }
  
    console.log(response);
  }
  
  const thing1 = 1;
  const thing2 = 2;
  const thing3 = 3;
  
  consoleAll(thing1, thing2, thing3);
  console.log(thing1, thing2, thing3);
  