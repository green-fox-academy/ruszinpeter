"use strict";
var listWithNames = ['Adam', 'Eve', 'John', 'Obama'];
console.log(listWithNames.length);
listWithNames.push('William');
console.log(listWithNames);
console.log('Is it empty?', listWithNames.length === 0);
listWithNames.push('John', 'Amanda');
console.log(listWithNames);
console.log(listWithNames.length);
console.log(listWithNames[2]);
for (var i = 0; i < listWithNames.length; i++) {
    console.log(listWithNames[i]);
}
for (var j_1 = 0; j_1 < listWithNames.length; j_1++) {
    console.log((j_1 + 1) + '. ' + listWithNames[j_1]);
}
listWithNames.splice(1, 1);
console.log(listWithNames);
for (var k = listWithNames.length - 1; k >= 0; k--) {
    console.log(listWithNames[k]);
}
listWithNames.splice(0, listWithNames.length);
console.log("content :", listWithNames);
