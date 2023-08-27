// TODO: Import the parent class
const vehicle = require("./vehicle");

class Boat extends vehicle{
  constructor(id,type,crew){
    super(id,0,"bwon");
    this.type=type;
    this.crew = crew;
  }
  useHorn(){
    console.log(this.sound);
  }

  crewSoundOff(){
    this.crew.forEach(element => {
      console.log(element);
    });
  }
}

// TODO: Create a `Boat` class that extends the `Vehicle` class

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
