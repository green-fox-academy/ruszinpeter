'use string'

/*Given a string, compute recursively (no loops) a new string 
where all the lowercase 'x' chars have been changed to 'y' chars.*/


function changeString(newString: string):string {
    let ifx: string = "x"
    if (newString.indexOf("x") == -1) {
        return newString;
    }
    else {
       return changeString(newString.replace("x", "y"));
    }
}
console.log(changeString("xuiuisacxzaxfa"));

