
class Tree {
  color: string;
  waterLevel: number;
  waterAmount: number;
  absorbWater: number;

  constructor(color: string) {
    this.color = color,
      this.waterLevel = 0,
      this.waterAmount = 10,
      this.absorbWater = 0.75
  }
}

export { Tree };
