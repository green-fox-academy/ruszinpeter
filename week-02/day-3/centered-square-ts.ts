'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (ctx !== null) {
    // DO NOT TOUCH THE CODE ABOVE THIS LINE

    // Draw a green 10x10 square to the center of the canvas.
    let xCenter: number = 300;
    let yCenter: number = 200;

    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(xCenter - 5, yCenter - 5);
    ctx.lineTo(xCenter + 5, yCenter - 5);
    ctx.lineTo(xCenter + 5, yCenter + 5);
    ctx.lineTo(xCenter-5, yCenter+5);
    ctx.lineTo(xCenter-5, yCenter-5);
    ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();

}