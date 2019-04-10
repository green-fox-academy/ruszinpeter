'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


function sizeAndColor(size: number, color: string) {
    if (ctx !== null) {
        for (let i = 0; i <= 600; i = i + size) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(i, i, size, size);
        }
    }

}
sizeAndColor(10, "blue");
