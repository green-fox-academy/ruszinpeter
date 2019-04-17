/*Post-it
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/

class PostIt {
  backgroundColor : string = '';
  text: string = '';
  textColor: string = '';

  constructor(backgroundColor:string, text:string, textColor:string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
  checkMyPostIt():void {
    console.log(`Your post-it is ${this.backgroundColor} and the text on it is ${this.textColor} saying: ${this.text}`);  
  }
}

let postFirst:PostIt = new PostIt('orange', 'Idea 1', 'blue');
let postSecont:PostIt = new PostIt('pink', 'Awesome', 'black');
let postThird:PostIt = new PostIt('yellow', 'Superb','green');

postFirst.checkMyPostIt();
postSecont.checkMyPostIt();
postThird.checkMyPostIt();