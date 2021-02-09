"use strict";
// get the form
let coinForm = document.getElementById('coin-form');
coinForm.addEventListener('submit', function(event){

    // suppress the page reload
    event.preventDefault();

    // get the form data
    const data = new FormData(coinForm);
    let numberOfCoins = data.get('numberOfCoins');
    let coin = data.get('coin');

    // get the coin purse
    let coinPurse = document.getElementById('coin-purse');

    // added the event listener to remove the coin to the parent
    coinPurse.addEventListener('click', function(e){
        e.target.remove();
    })
   
    // loop and add the coins to the DOM
    for(let i = 0; i < numberOfCoins; i++){

        // create a div to hold the new coin
        let newCoin = document.createElement('div');
        newCoin.classList.add(coin);
        coinPurse.appendChild(newCoin);

        // you can also add click listener to remove a coin to each child div (rather than the parent coin purse)
        // newCoin.addEventListener('click', function(){
        //     newCoin.remove();
        // })
    }
})