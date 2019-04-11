'use strict';

/*Given a non-negative int n, return the sum of its digits recursively (no loops).
 Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), 
while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).*/

function sumdigits(sum: number) {
    let counter: number = 0;
    if (sum < 10) {
        return counter = counter + sum;
    } else {
        counter = sumdigits((sum - (sum % 10)) / 10);
        counter = counter + (sum % 10);
        return counter;
    }
}
console.log(sumdigits(86548));

