'use strict'

let listA:string [] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB:string [] = listA;

console.log(listB);

console.log(listA.indexOf('Durian') > -1);

listB.splice(3,1);
console.log(listB);

listA[4] = "Kiwifruit";
console.log(listA);

console.log(listA.length > listB.length ? "B is bigger": "A is bigger");

console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));

listB.push("PassionFruit", 'Pummelo');
console.log(listA[3]);
