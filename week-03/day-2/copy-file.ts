    
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile (oldFile: string, newFile: string) {
  try {
    
    const fs = require('fs');
    const content = fs.readFileSync((oldFile), 'UTF8');
    fs.writeFileSync(newFile, content);
    return true;
  }
  catch {
    return false;
  }
}
console.log(copyFile('my-file3.txt','newcopy.txt' ));