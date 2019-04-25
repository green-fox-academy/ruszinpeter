'use strict'

let sumOfNums: number;
export class WorkWithNumbers {
 nums: number[];
  addNum(nums:number[]) {
    for (let i: number = 0; i < nums.length; i++) {
      sumOfNums += nums[i]
    }
    return console.log(sumOfNums);
  }
}

let newNums = new WorkWithNumbers;
newNums.addNum([32,43,34,21,5]);
