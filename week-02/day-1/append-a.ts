'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals:string[] = ['koal', 'pand', 'zebr'];
let newName = animals.map (x => x + 'a');

console.log(newName);