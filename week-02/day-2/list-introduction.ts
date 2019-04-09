"use strict"
let listWithNames: string[] = ['Adam', 'Eve', 'John', 'Obama'];
console.log(listWithNames.length);

listWithNames.push('William');
console.log(listWithNames);

console.log('Is it empty?', listWithNames.length === 0);

listWithNames.push('John', 'Amanda');
console.log(listWithNames);

console.log(listWithNames.length);
console.log(listWithNames[2]);

for (let i: number = 0; i < listWithNames.length; i++) {
    console.log(listWithNames[i]);
}

for (let j: number = 0; j < listWithNames.length; j++) {
    console.log((j + 1) + '. ' + listWithNames[j])
}
listWithNames.splice(1, 1);
console.log(listWithNames);
for (let k = listWithNames.length-1; k >= 0; k--) {
    console.log(listWithNames[k]);
}

listWithNames.splice(0,listWithNames.length);
console.log("content :", listWithNames);