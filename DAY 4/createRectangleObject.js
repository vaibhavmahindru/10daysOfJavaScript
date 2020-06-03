function Rectangle(a, b) {
  var o = new Object();
  o.length = a;
  o.width = b;
  o.perimeter = 2 * (a + b);
  o.area = a * b;

  return o;
}
//there are many ways to declare an object and access it's elements, I have used new Object().
//other ways are by using constructors i.e.
function main() {
  const a = +readLine();
  const b = +readLine();

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}
