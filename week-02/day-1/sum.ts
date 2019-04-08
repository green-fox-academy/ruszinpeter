'use strict'
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let addNumber:number = 4;

function sum(numFromZero:number) {
    for (let i=0; i < addNumber; i++) {

        numFromZero = numFromZero + i;
    }
    return numFromZero;

}

console.log(sum(addNumber));
