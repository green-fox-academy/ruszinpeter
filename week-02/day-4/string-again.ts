'use string'

/*Given a string, compute recursively a new string 
where all the 'x' chars have been removed.*/


function deleteString(newString: string): string {
    let ifx: string = "x"
    if (newString.indexOf("x") == -1) {
        return newString;
    }
    else {
        return deleteString(newString.replace("x", ""));
    }
}
console.log(deleteString("xuiuisacxzaxfa"));
