'use strict'

let lineCount: number = 11;
let pyramidPeak: string = '*';
let pyramidEmptyBlock: string = ' ';


for (let j:number = 1; j<=lineCount; j++) {
for (let i:number = j+1; i <= lineCount; i++) {
    pyramidEmptyBlock = pyramidEmptyBlock + ' ';
}
console.log(pyramidEmptyBlock + pyramidPeak);
pyramidEmptyBlock = ' ';
pyramidPeak += '**';
}