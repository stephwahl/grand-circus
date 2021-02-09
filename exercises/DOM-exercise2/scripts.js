document.querySelector("#letters").addEventListener("click", function(event) {
    const letters = document.getElementById("letters-content");
    letters.style.display = "block";
    const numbers = document.getElementById("numbers-content");
    numbers.style.display = "none";
    event.preventDefault();
})

document.querySelector("#numbers").addEventListener("click", function(event) {
    const letters = document.getElementById("letters-content");
    letters.style.display = "none";
    const numbers = document.getElementById("numbers-content");
    numbers.style.display = "block";
    event.preventDefault();
})


// Create a menu button. 

// When clicked, it opens a menu with two links. 

// Clicking either of the menu options shows the appropriate page content and hides the other. (Note: this does not
// link to a new page; it uses JavaScript to show/hide different contents. You will have to prevent
// the default <a> behavior.)

// The menu also closes when a menu option is clicked.

// Starts with letters content shown and numbers hidden.

// Opens menu when button clicked.

// Hides letters and shows numbers when numbers menu option clicked.

// Animate the menu opening and closing.