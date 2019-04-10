'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (ctx !== null) {
    // DO NOT TOUCH THE CODE ABOVE THIS LINE

    // Draw four different size and color rectangles.
    // Avoid code duplication.

   
    for (let i: number = 0; i <= 3; i ++) {
        let colors: string []=['blue', 'black', 'aqua', 'purple'] 
        ctx.fillStyle = colors[i];
        ctx.fillRect(100 * (i + 1), 50 * (i + 1), 10 * (i + 1), 10 * (i + 1));
    }
}