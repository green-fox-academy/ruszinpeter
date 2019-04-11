'use strict'

/*Power
Given base and n that are both 1 or more, compute recursively (no loops) 
the value of base to the n power, so powerN(3, 2) is 9 (3 squared).*/

function power(baseNumber: number, powerNumber: number):number {
    if (powerNumber <= 0) {
        return baseNumber;
    }
    else {
        return baseNumber * power(baseNumber,powerNumber-1);
    }
}
console.log(power(4,3));