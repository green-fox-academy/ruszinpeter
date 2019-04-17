/*Counter
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/
class Counter {
  counter: number;

  constructor(counter?: number) {
    if (counter) this.counter = counter;
    else this.counter = 0;
  }

  add(num?: number): void {
    if (num) this.counter += num;
    else this.counter++;
  }

  get() {
   return this.counter.toString();
  }

  reset() {
    this.counter = 0;
    return this.counter;
  }
}
const counterValue: Counter = new Counter(12);
counterValue.add(23);
console.log(counterValue);
counterValue.add(12);
console.log(counterValue);
console.log(counterValue.get());
counterValue.reset();
console.log(counterValue);
