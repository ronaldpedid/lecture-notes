let car = {
  color: "red",
  isStarted: false,
  start() {
    this.isStarted = true;
  },
  stop() {
    this.isStarted = false;
  },
  drive() {
    if (this.isStarted) {
      console.log("vroom");
    }
    else {
      console.log("you need to start the car")
    }
  },
  paint(colorParam) {
    this.color = colorParam;
  },
};
console.log(car.isStarted);
car.start();
console.log(car.isStarted);
car.paint("yellow");
console.log(car.color);
car.stop();
car.drive();
