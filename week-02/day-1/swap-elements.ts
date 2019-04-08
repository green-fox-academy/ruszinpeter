'use strict'

    
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

let swapFirstElement:string = abc.shift();
let swapLastElement: string = abc.pop();
abc.push(swapFirstElement);
abc.unshift(swapLastElement);

console.log(abc);
