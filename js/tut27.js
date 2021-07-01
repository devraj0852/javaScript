console.log("Hello");

//Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 120,
  run: function () {
    console.log("Car is running");
  },
};

//we allready seen constructor like this:
//  new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed} km/h than mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Maruti Alto", 120);
car3 = new GeneralCar("Mercedes", 220);
console.log(car1, car2, car3);
