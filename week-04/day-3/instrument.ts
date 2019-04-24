' use string'

abstract class Instrument {
  name: 'string';
  play() { };
}

abstract class Stringedinstrument extends Instrument {
  numberOfStrings?: number
  constructor(numberOfStrings?: number) {
    super();
    this.numberOfStrings = numberOfStrings;
  }
  sound() { }
  play() { return this.sound() }

};

class ElectricGuitar extends Stringedinstrument {
  numberOfStrings = this.numberOfStrings || 6;
  sound() {
    return console.log(
      `Electric Guitar, a  ${this.numberOfStrings} -stringed instrument that goes Twang`
    )
  }

}
class BassGuitar extends Stringedinstrument {
  numberOfStrings = this.numberOfStrings || 4;
  sound() { return console.log(`Bass Guitar, a  ${this.numberOfStrings} -stringed instrument that goes Duum-duum-duum`) };
}

class Violin extends Stringedinstrument {
  numberOfStrings = this.numberOfStrings || 4;
  sound() { return console.log(`Violin, a  ${this.numberOfStrings} -stringed instrument that goes Screech`) };
}
export { Instrument };
export { ElectricGuitar };
export { BassGuitar };
export { Violin };


