'use strict'

/*Given a string, compute recursively a new string where all
 the adjacent chars are now separated by a * */

 let firstPart: string = '';
 function separator(string: string) : string {

    if (string.length ===1) {
        return firstPart + (string.charAt(string.length-1));
    }
    else {
       firstPart = firstPart + (string.substr(0,1))+ '*';
       return separator(string.substring(1, string.length));
    }
}
console.log(separator('12345678'));