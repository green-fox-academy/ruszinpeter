// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


function readfile(myfile:any) {
  const fs = require('fs');
  try {
    return fs.readFileSync(myfile, 'UTF8');
      
      const content = fs.readFileSync(readfile(myfile), 'UTF8');
      
    } catch (err) {
      console.log("Unable to read file:", err.path);
    }
}
console.log(readfile('my-file.txt'));