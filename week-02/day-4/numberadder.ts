'use strict';

/*Write a recursive function that takes one parameter: n and adds numbers from 1 to n.*/

function recursive(n: number) {
    let counter: number = 0;
    for (let i: number = 0; i < n; i++) {
        counter = counter + i
    }
    return counter;
}

console.log(recursive(5));