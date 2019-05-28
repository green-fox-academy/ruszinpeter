'use strict';

const candyGeneratorButton = document.querySelector('.create-candies');
const lollypopGeneratorButton = document.querySelector('.buy-lollypops');
const ratio = document.querySelector('.candy-machine');

let candies = 0;
let lollypop = 0;

let test = candyGeneratorButton.addEventListener('click', () => {
    candies++;
    document.querySelector('.candies').innerHTML = candies;
});

lollypopGeneratorButton.addEventListener('click', () => {
    lollypop++;
    candies -= 2;
    document.querySelector('.lollypops').innerHTML += '🍭';
    document.querySelector('.candies').innerHTML = candies;
});