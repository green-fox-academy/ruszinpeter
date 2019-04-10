'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (ctx !== null) {
    // DO NOT TOUCH THE CODE ABOVE THIS LINE

    // draw a box that has different colored lines on each edge.


    canvas.height = 600;
    canvas.width = 800;

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(50, 50);
    ctx.lineTo(300, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.strokeStyle = 'green';
    ctx.lineTo(300, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.strokeStyle = 'grey';
    ctx.lineTo(50, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.strokeStyle = 'blue';
    ctx.lineTo(50, 50);
    ctx.stroke();
}