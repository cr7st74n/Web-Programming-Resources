// TODO: Import the parent class
const vehicle = require("./vehicle");

class Car extends vehicle{
  constructor(id,color,passengers){
    super(id,4,"beep");
    //this.numberOfWheels = 5;
    //this.sound = "beep";
    //this.id = id;
    this.color = color;
    this.passengers = passengers;
  }
  useHorn(){
    console.log(`my car sound like ${this.sound}`)
  }

  checkPassengers(){
    if(this.passengers.length < 4){
      console.log(`spaces left ${4-this.passengers.length}`);
    }else{
      console.log("This car only seats 4 people. You have too many passengers!");
    }
  }
}

// TODO: Create a `Car` class that extends the `Vehicle` class

const carPassengers = [
  'Aristotle',
  'Confucius',
];

// console.log(carPassengers.length);
const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
