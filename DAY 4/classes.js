/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    //The reduce() method reduces the array to a single value.
    //The reduce() method executes a provided function for each value of the array (from left-to-right).
    //Original array is not changed by this method.
    return this.sides.reduce((total, side) => total + side);
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
