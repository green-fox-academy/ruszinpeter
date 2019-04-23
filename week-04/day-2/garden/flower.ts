
class Flower {
  color: string;
  waterLevel: number;
  waterAmount: number;
  absorbWater: number;

  constructor(color: string) {
    this.color = color,
      this.waterLevel = 0,
      this.waterAmount = 5,
      this.absorbWater = 0.75
  }
}

export { Flower };
