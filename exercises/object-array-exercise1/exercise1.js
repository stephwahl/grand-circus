// Create an array of 3 characters. Each character is an object with two properties--name and
// health.

const characters = [
    { name: "Steven", health: 5 },
    { name: "Stephanie", health: 10 },
    { name: "Zander", health: 3 }
];

// Create an object outside the array in a variable called opponent. The opponent also has
// name and health properties. (the opponent should start with more health than any of the
// characters.)

const opponent = {
    name: "Bad Guy",
    health: 15
};



// Create a loop that:
    // ● Prints out the name and health of all three characters plus the opponent.
    
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        console.log(character.name, character.health)
    };
    console.log(opponent.name, opponent.health)  

    // ● Prompts the user to pick a character by number (1, 2, or 3).

    let characterSelected = prompt("Please select a character by number - 1, 2, or 3");
    
    // ● “Battles” the selected character against the opponent. Remove five health from both
    // the character and the opponent. (Or you can remove a random number from each.)
    // let pick;
    let selected;

    if (characterSelected = '1') {
        selected = characters[0];
    
    } else if (characterSelected = '2') {
        selected = characters[1];
    } else {
        selected = characterstou[2];
  
    }
    console.log(`You picked character number ${selected}`);
    // console.log(`Character selected is ${selected}`);

    // ● Exit the loop when the user response is null, which means that the cancel button was
    // clicked.
