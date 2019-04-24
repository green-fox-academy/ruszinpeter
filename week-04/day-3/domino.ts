interface Comparable {
  compareTo(other: Comparable): number;
  values: number[];
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Comparable) {
    if (this.values[0] < other.values[0]) {
      return -1;
    }
    if (this.values[0] > other.values[0]) {
      return 1;
    }
    return 0;
  }
};

export { Domino };