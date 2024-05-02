// This is the parent class
class Shape {
  getArea() {
    return null;
  }
}
// This is a child class
class Triangle extends Shape {
  constructor(base, height) {
    // Call the base class constructor
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
}
