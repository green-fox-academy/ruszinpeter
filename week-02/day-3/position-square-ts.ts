'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function addLeftCorner(x: number, y: number) {
    if (ctx !== null) {
        ctx.fillRect(x, y, 50, 50);
    }
}
for (let i: number = 50; i <= 200; i += 50) {
    if (ctx !== null) {
        let colors: string[] = ['red', 'blue', 'green', 'purple']
        ctx.fillStyle = colors[i / 50 - 1];
        addLeftCorner(i + 50, i + 100);
    }
}
