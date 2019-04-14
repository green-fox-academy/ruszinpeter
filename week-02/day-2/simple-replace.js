'use strict';
var example = 'In a dishwasher far far away';
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
var replaceThis = 'dishwasher';
var newString = example.replace(replaceThis, 'galaxy');
example = newString;
console.log(example);
