'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx !== null) {
// DO NOT TOUCH THE CODE ABOVE THIS LINE


canvas.height = 600;
canvas.width = 600;
// draw a red horizontal line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, 300);
ctx.lineTo(600, 300);
ctx.stroke();

// draw a green vertical line to the canvas' middle.
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 0);
ctx.lineTo(300, 600);
ctx.stroke();

}