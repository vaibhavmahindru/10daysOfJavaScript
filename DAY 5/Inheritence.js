Rectangle.prototype.area = function () {
  return this.h * this.w;
};

class Square extends Rectangle {
  constructor(s) {
    super(s); // super keyword enables the child to access the methods and members of the parent class.
    this.h = s;
    this.w = s;
  }
}
