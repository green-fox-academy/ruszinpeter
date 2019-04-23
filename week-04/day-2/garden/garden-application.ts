`use strict`
import { Tree } from './tree';
import { Flower } from './flower'


class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  constructor() {
    this.flowers = [],
      this.trees = []
  }

  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }
  addTree(tree: Tree): void {
    this.trees.push(tree);
  }
  showGarden(): void {
    console.log(`It has ${this.flowers}, ${this.trees} `)
  }
  watering1(water: number = 70) {
    let needWater: number;
    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel <= this.flowers[i].waterAmount) {
        needWater++;
      }

      if (this.trees[i].waterLevel <= this.trees[i].waterAmount) {
        needWater++;
      }
    }
    for (let j = 0; j < this.flowers.length; j++) {
      if (this.flowers[j].waterLevel <= this.flowers[j].waterAmount) {
        this.flowers[j].waterLevel += water / needWater * this.flowers[j].absorbWater;
      }

      if (this.trees[j].waterLevel <= this.trees[j].waterAmount) {
        this.trees[j].waterLevel += water / needWater * this.trees[j].absorbWater;
      }
    }
  }

  addInfo() {
    this.flowers.forEach(x => {
      x.waterLevel < x.waterAmount ? console.log(`The ${x.color} flower needs water`) : console.log(`The ${x.color} flower doesnt need water`)
    })
    this.trees.forEach(x => {
      x.waterLevel < x.waterAmount ? console.log(`The ${x.color} tree needs water`) : console.log(`The ${x.color} tree doesnt need water`)
    })
  }
}

let newGarden: Garden = new Garden;
const yellowFlower: Flower = new Flower('yellow');
const bluelower: Flower = new Flower('blue');
const purpleTree: Tree = new Tree('purple');
const orangeTree: Tree = new Tree('orange');
newGarden.addFlower(yellowFlower);
newGarden.addFlower(bluelower);
newGarden.addTree(purpleTree);
newGarden.addTree(orangeTree);
newGarden.addInfo();
newGarden.watering1();
newGarden.addInfo();

