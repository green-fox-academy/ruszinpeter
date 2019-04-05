'use strict'

let currentHours: number = 14;
let currentMinutes: number = 34;
let currendSeconds: number = 42;

let allSecondsInADay: number = 60*60*24;
let passedSeconds: number = (currentHours*60*60) + (currentMinutes*60) + (currendSeconds);
let remainingSeconds: number = allSecondsInADay - passedSeconds;
console.log(remainingSeconds);