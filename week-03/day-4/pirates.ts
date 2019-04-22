class Pirates {
  pirateMember: string;
  isHeDrunk: boolean;
  numOfRums: number;

  constructor(
    pirateMember: string,
    isHeDrunk: boolean=false,
    numOfRums: number = 0,
  ) {
    this.pirateMember = pirateMember,
      this.isHeDrunk = isHeDrunk,
      this.numOfRums = numOfRums
  }
  drinkSomeRum() {
    return  this.numOfRums < 4 ? this.isHeDrunk = false: this.isHeDrunk=true, this.numOfRums++;
  }
  howIsGoingMate() {
    return this.isHeDrunk == true ? console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?") : console.log("Pour me anudder!");
   }
}

const Jack: Pirates = new Pirates('cadet');
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
console.log(Jack.isHeDrunk);

Jack.howIsGoingMate();
