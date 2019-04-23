`use strict`

import {Person} from './person';

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor (
    name: string = `Jane Doe`,
    age: number = 30,
    gender: string = `female`,    
    company: string = `Google`,
    hiredStudents: number = 0,
  ) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce(): void {
    console.log(`Hi, I'm, ${this.name},  a  ${this.age}  year old  ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far`)

  }
  getGoal(): void {
    console.log("Hire brilliant junior software developers.")
  }
  hire(): void {
    this.hiredStudents++;
  }
}

export {Sponsor};
