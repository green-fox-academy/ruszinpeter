// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writeSL(myfile: string) {
  try {
    const fs = require('fs');
  let newContent: string = 'Peter3';
  let fileContent = fs.writeFileSync(myfile,newContent);
  return myfile;
  }
  catch (err){
    console.log('Unable to write file:', myfile);
  }
}
console.log(writeSL('my-file.txt'));