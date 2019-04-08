'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial

let addNumber:number = 7;

function factorio(numFromZero:number) {
    for (let i=1; i < addNumber; i++) {

        numFromZero = numFromZero * i;
    }
    return numFromZero;

}

console.log(factorio(addNumber));