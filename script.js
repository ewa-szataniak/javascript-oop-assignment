// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }
}

// Example usage:

// Create a new Car instance
const myCar = new Car('Toyota', 'Camry', 2020, 'Blue');

// Get the car's make
console.log(myCar.getMake()); // Output: Toyota

// Get the car's model
console.log(myCar.getModel()); // Output: Camry

// Get the car's year
console.log(myCar.getYear()); // Output: 2020

// Get the car's color
console.log(myCar.getColor()); // Output: Blue

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
