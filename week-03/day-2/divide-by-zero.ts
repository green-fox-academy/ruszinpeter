// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero(num: number) {
  try {
    let resultNum:number = 10 / num;
    if (num === 0)  {
      throw new SyntaxError('division with null');
    }
        return resultNum;
  } catch (err) {
    console.log('Error is: ' + err.message);
  }
}
console.log(divideByZero(0));