'use strict'

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];
numList.map(x => {
    if (x === 8) {
        let indexOfEight = numList.indexOf(x);
        numList[indexOfEight] = 4;
    }
})
console.log(numList[3]);

