'use strict'

let lineCount: number = 11;
let diamondEmptyBlock: string = ' ';
let diamondTile: string = '*';

for (let i: number = 0; i < lineCount/2; i++) {
  
    for (let j = i + 1; j < lineCount/2; j++) {
      diamondEmptyBlock = diamondEmptyBlock + ' '
  }
        console.log(diamondEmptyBlock + diamondTile);
        diamondEmptyBlock = ' '
        diamondTile += '**'; 
}

diamondEmptyBlock = ' ';

for (let h: number = lineCount/2+1; h < lineCount; h++) {
    diamondTile = '*';
    diamondEmptyBlock += ' ';

    for (let j:number = 1; j<lineCount-h; j++) {
    diamondTile = diamondTile + '**';
    }

    console.log(diamondEmptyBlock + diamondTile);
}
            