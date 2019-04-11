'use strict'

/*Find the greatest common divisor of two numbers using recursion.*/

function commonDivisor(a: number, b: number): number {
    if (a % b == 0) return b;
    return commonDivisor(b, a % b);
}
console.log(commonDivisor(42, 110));