'use strict'
//even 
let a: number = 24;
let out: number = 0;

if (a % 2 === 0) {
    console.log(out++);
}

//between 10 and 20

let b: number = 12;
let out2: string = '';

if ( b =>10 && b<=20 ) {
    out2 = 'sweet';
    console.log(out2);
}
if (b<10) {
    out2 = "less";
    console.log(out2);
}

if (b>20) {
    out2 = "More!";
    console.log(out2);
}

//c

let c: number = 42;
let credits: number = 100;
let isBonus: boolean = false;

if (credits>=50 && isBonus === false) {
    c = c+2;
}

if (credits<50 && isBonus === false) {
    c = c+1;
}

if (isBonus = true) {
    c = c;
}
console.log(c);


//d

let d: number = 8;
let time: number = 150;
let out3: string = '';

if (d%4 === 0 && time<=200) {
    out3 = 'check';
}

if (time>200) {
    out3 = 'Time out';
}
else {
    out3 = 'Run Forrest Run!'
}

console.log(out3);
