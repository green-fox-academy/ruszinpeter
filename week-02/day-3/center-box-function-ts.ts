'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function centerBox(x: number) {
    if (ctx !== null) {
        ctx.beginPath()
        ctx.fillRect(300 - (x / 2), 200 - (x / 2), x, x)
    }
}
for (let i: number = 200; i >= 0; i = i - 50) {
    if (ctx !== null) {
    let colors:string [] = ['red', 'blue', 'green', 'purple']
    ctx.fillStyle = colors[i/50-1]
    centerBox(i);
}
}