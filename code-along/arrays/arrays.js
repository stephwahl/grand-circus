const animal = {
    name: "BJ",
    pockets: [200, 'Hammer', 'Book', { name: "T-rex", type: 'fossil' }],
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  };


  console.log('POCKETS BEFORE', animal.pockets);

  const notebook = 'Leather Notebook';
  // animal.pockets.push(notebook);  // add to end
  // animal.pockets.unshift(notebook);  // add to beginning
  
  // (index, how many to remove (can be 0), what you're putting in its place)
  animal.pockets.splice(2, 0, notebook); // Add notebook to index 2, removing nothing
  animal.pockets.splice(4, 1, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
  animal.pockets.splice(4, 1, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
  
  console.log('POCKETS AFTER', animal.pockets);

  
// const item = animal.pockets.pop(); // take of the end, returns what it removed
// const item = animal.pockets.shift(); // take of the start, returns what it removed
animal.pockets.splice(3, 1); // Remove 1 item, starting at index 3.
// NOTE: in splice, the third arg is optional :)

// console.log(item);
console.log('POCKETS AFTER', animal.pockets);

return;
