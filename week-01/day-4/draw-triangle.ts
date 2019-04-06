'use strict'

let lineCount: number = 11;
let drawTriangle: string = "*";

for (let i:number = 1; i <= lineCount; i++) {
    console.log(drawTriangle);
    drawTriangle = drawTriangle + "*";
}

