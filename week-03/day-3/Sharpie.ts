import { userInfo } from 'os';

/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

class Sharpie {
  color:string = '';
  width:number = 0;
  inkAmount:number = 0;

  constructor(color:string, width:number) {
    this.inkAmount = 100.0;
    this.color = color;
    this.width = width;
  }
  use(): number {
    return this.inkAmount -=0.1*this.width;
  }

}

const newSharpie:Sharpie = new Sharpie('black', 2)
newSharpie.use();
newSharpie.use();

console.log(newSharpie);