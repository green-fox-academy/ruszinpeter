`use strict`
import { Person } from './person';

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(
    name: string = `Jane Doe`,
    age: number = 30,
    gender: string = `female`,
    previousOrganization: string = `School of life`,
    skippedDays: number = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  introduce(): void {
    console.log(`Hi, I'm, ${this.name},  a  ${this.age}  year old  ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already."`)

  }
  getGoal(): void {
    console.log("Be a junior software developer.")
  }
  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

export {Student};
