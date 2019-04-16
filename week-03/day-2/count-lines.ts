
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countlines(filepath: string) {
  const fs = require('fs');
  try {
    let fileContent = fs.readFileSync(filepath, 'UTF8');
    let lines = fileContent.split('\n');
    return lines.length;
  } catch (err) {
    console.log('O');
  }
}
console.log(countlines('my-file.txt'));