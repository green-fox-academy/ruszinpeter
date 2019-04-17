/*Animal
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  public eat(): number {
    return this.hunger -= 1;
  }

  public drink(): number {
    return this.thirst -= 1;
  }
  play(): number {
    return this.hunger += 1, this.thirst += 1;
  }
}

const firstAnimal: Animal = new Animal();
const secondAnimal: Animal = new Animal();
firstAnimal.play();
firstAnimal.play();
firstAnimal.drink();
console.log(firstAnimal);