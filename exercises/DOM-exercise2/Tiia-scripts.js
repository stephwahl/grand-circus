"use strict";

// show the menu
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    menu.style.display = "block";
});

// for the links to disable them
document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault();
});

// toggle the letters to the numbers
const numbersLink = document.getElementById('numbers-link');
numbersLink.addEventListener('click', function(){
    letters.style.display = "none";
    menu.style.display = "none";
    numbers.style.display = "block";
});

// toggle the numbers to the letters
const lettersLink = document.getElementById('letters-link');
lettersLink.addEventListener('click', function(){
    numbers.style.display = "none";
    menu.style.display = "none";
    letters.style.display = "block";
});