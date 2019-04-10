
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function sizeAndColor(size: number, color: string) {
    if (ctx !== null) {
        for (let i = 0; i <= size*19; i = i + size) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.fillRect(i, i, size, size);
        }
    }

}
sizeAndColor(12, "purple");
