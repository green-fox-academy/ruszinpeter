'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx !== null) {
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLongLine(x:number, y:number) {
    if (ctx !== null) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x,y);
    ctx.lineTo(x+50, y);
    ctx.stroke();
    }
    }
    


for (let i: number = 0; i < 300; i = i + 99) {
    drawLongLine(i, i + 120);
}
}
